// Default-Deny für Query-Parameter in Analytics-URLs.
//
// Aus jeder getrackten URL werden ALLE Query-Parameter entfernt, bis auf die
// hier gelisteten. Eine Denylist bekannter Feldnamen (iban, name, …) würde nur
// schützen, woran wir heute denken — ein späteres Feature mit einem neuen
// Parameternamen wäre wieder offen.
//
// 'source' stammt aus dem Manifest (start_url "/?source=pwa"), die utm_*-Werte
// aus Kampagnen-Links. Beide beschreiben die Herkunft eines Aufrufs und
// enthalten keine personenbezogenen Daten.
const ALLOWED_QUERY_PARAMS = [
  'source',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

export function redactQueryParams<T extends { url: string }>(event: T): T {
  try {
    const url = new URL(event.url);
    for (const key of Array.from(url.searchParams.keys())) {
      if (!ALLOWED_QUERY_PARAMS.includes(key)) {
        url.searchParams.delete(key);
      }
    }
    return { ...event, url: url.toString() };
  } catch {
    // Nicht parsebare URL: alles ab '?' abschneiden, statt sie durchzulassen.
    const queryStart = event.url.indexOf('?');
    return queryStart === -1
      ? event
      : { ...event, url: event.url.slice(0, queryStart) };
  }
}
