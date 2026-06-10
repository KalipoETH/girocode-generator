import Image from 'next/image';
import Link from 'next/link';
import { LogoutButton } from './LogoutButton';

const navItems = [
  { href: '#overview', label: 'Übersicht' },
  { href: '#newsletter', label: 'Newsletter' },
  { href: '#github', label: 'GitHub' },
  { href: '#site', label: 'Site Stats' },
  { href: '#links', label: 'Quick Links' },
  { href: '#todo', label: 'To-Do' },
];

export function AdminSidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-slate-800 bg-slate-900/50 p-6">
      <div className="mb-8 flex items-center gap-3">
        <Image
          src="/logo-dark.jpg"
          alt="GiroCode Generator"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div>
          <p className="text-sm font-bold text-white">GiroCode</p>
          <p className="text-xs text-slate-500">Admin</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-8">
        <LogoutButton />
      </div>
    </aside>
  );
}
