'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingDots } from './FloatingDots';
import PwaInit from './PwaInit';
import InstallPwaPrompt from './InstallPwaPrompt';

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      <div className="flex min-h-screen flex-col">
        {!isAdminRoute && <FloatingDots />}
        {!isAdminRoute && <Navbar />}
        <main className="flex-1">{children}</main>
        {!isAdminRoute && <Footer />}
      </div>
      <PwaInit />
      {!isAdminRoute && <InstallPwaPrompt />}
    </>
  );
}
