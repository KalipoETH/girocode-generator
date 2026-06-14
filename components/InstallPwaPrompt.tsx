'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { track } from '@vercel/analytics';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

const i18n: Record<
  Locale,
  { title: string; subtitle: string; install: string; iosHint: string; close: string }
> = {
  de: {
    title: 'GiroCode Generator installieren',
    subtitle: 'Schneller Zugriff, funktioniert offline',
    install: 'Installieren',
    iosHint: 'Tippe auf „Teilen" → „Zum Home-Bildschirm"',
    close: 'Schließen',
  },
  en: {
    title: 'Install GiroCode Generator',
    subtitle: 'Quick access, works offline',
    install: 'Install',
    iosHint: 'Tap "Share" → "Add to Home Screen"',
    close: 'Close',
  },
  fr: {
    title: 'Installer GiroCode Generator',
    subtitle: 'Accès rapide, fonctionne hors ligne',
    install: 'Installer',
    iosHint: 'Appuyez sur « Partager » → « Sur l\'écran d\'accueil »',
    close: 'Fermer',
  },
  es: {
    title: 'Instalar GiroCode Generator',
    subtitle: 'Acceso rápido, funciona sin conexión',
    install: 'Instalar',
    iosHint: 'Pulsa «Compartir» → «Añadir a pantalla de inicio»',
    close: 'Cerrar',
  },
  it: {
    title: 'Installa GiroCode Generator',
    subtitle: 'Accesso rapido, funziona offline',
    install: 'Installa',
    iosHint: 'Tocca "Condividi" → "Aggiungi alla schermata Home"',
    close: 'Chiudi',
  },
};

function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'de';
  const lang = navigator.language?.slice(0, 2).toLowerCase();
  if (lang === 'en') return 'en';
  if (lang === 'fr') return 'fr';
  if (lang === 'es') return 'es';
  if (lang === 'it') return 'it';
  return 'de';
}

function isIos(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function isInStandaloneMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(display-mode: standalone)').matches;
}

export default function InstallPwaPrompt() {
  const [show, setShow] = useState(false);
  const [ios, setIos] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [locale, setLocale] = useState<Locale>('de');

  useEffect(() => {
    // Nicht anzeigen wenn bereits als PWA installiert
    if (isInStandaloneMode()) return;
    // Nur einmal pro Session zeigen
    if (sessionStorage.getItem('pwa-prompt-dismissed')) return;

    setLocale(detectLocale());
    setIos(isIos());

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    const handleAppInstalled = () => {
      track('pwa_installed', { locale: detectLocale() });
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    // iOS: kein beforeinstallprompt, manuell nach kurzer Verzögerung zeigen
    if (isIos() && !isInStandaloneMode()) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
      };
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    track('pwa_install_clicked', { locale });
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      dismiss();
    }
  };

  const dismiss = () => {
    sessionStorage.setItem('pwa-prompt-dismissed', '1');
    setShow(false);
  };

  if (!show) return null;

  const t = i18n[locale];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-lg animate-slide-up px-4 pb-4"
      role="dialog"
      aria-label={t.title}
    >
      <div
        className="flex items-center gap-3 rounded-xl border px-4 py-3 shadow-2xl"
        style={{
          background: '#0f1a0f',
          borderColor: 'rgba(34,197,94,0.25)',
        }}
      >
        <Image
          src="/icons/icon-72x72.png"
          alt="GiroCode"
          width={44}
          height={44}
          className="rounded-lg flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">📱 {t.title}</p>
          {ios ? (
            <p className="text-xs text-slate-400 mt-0.5">{t.iosHint}</p>
          ) : (
            <p className="text-xs text-slate-400 mt-0.5">{t.subtitle}</p>
          )}
        </div>
        {!ios && deferredPrompt && (
          <button
            onClick={handleInstall}
            className="flex-shrink-0 rounded-lg bg-green-500 px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-green-400"
          >
            {t.install}
          </button>
        )}
        <button
          onClick={dismiss}
          className="flex-shrink-0 text-slate-400 hover:text-white transition text-lg leading-none ml-1"
          aria-label={t.close}
        >
          ×
        </button>
      </div>
    </div>
  );
}
