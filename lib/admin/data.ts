export type BrevoListStats = {
  totalSubscribers: number;
  uniqueSubscribers: number;
  name: string;
  error?: string;
};

export type GitHubCommit = {
  sha: string;
  message: string;
  date: string;
};

export async function fetchBrevoListStats(): Promise<BrevoListStats> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return {
      totalSubscribers: 0,
      uniqueSubscribers: 0,
      name: 'Newsletter',
      error: 'BREVO_API_KEY fehlt',
    };
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts/lists/3', {
      headers: { 'api-key': apiKey },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error(`Brevo API ${res.status}`);
    }

    const data = await res.json();
    return {
      totalSubscribers: data.totalSubscribers ?? data.uniqueSubscribers ?? 0,
      uniqueSubscribers: data.uniqueSubscribers ?? data.totalSubscribers ?? 0,
      name: data.name ?? 'Newsletter',
    };
  } catch (err) {
    return {
      totalSubscribers: 0,
      uniqueSubscribers: 0,
      name: 'Newsletter',
      error: String(err),
    };
  }
}

export async function fetchGitHubCommits(perPage = 10): Promise<GitHubCommit[]> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/repos/KalipoETH/girocode-generator/commits?per_page=${perPage}`,
      { headers, next: { revalidate: 300 } },
    );

    if (!res.ok) {
      throw new Error(`GitHub API ${res.status}`);
    }

    const data = await res.json();
    return data.map((commit: { sha: string; commit: { message: string; author: { date: string } } }) => ({
      sha: commit.sha.slice(0, 7),
      message: commit.commit.message.split('\n')[0],
      date: commit.commit.author.date,
    }));
  } catch {
    return [];
  }
}

export function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return 'vor wenigen Sekunden';
  if (diffMin < 60) return `vor ${diffMin} Minute${diffMin !== 1 ? 'n' : ''}`;
  if (diffHour < 24) return `vor ${diffHour} Stunde${diffHour !== 1 ? 'n' : ''}`;
  if (diffDay < 30) return `vor ${diffDay} Tag${diffDay !== 1 ? 'en' : ''}`;
  return date.toLocaleDateString('de-DE');
}

export function formatCommitDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
