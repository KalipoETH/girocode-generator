'use client';

import React, { useState } from 'react';

type Locale = 'de' | 'en' | 'fr' | 'es';

const CONTENT: Record<
  Locale,
  {
    badge: string;
    headline: string;
    description: string;
    benefits: { icon: string; title: string; sub: string }[];
    namePlaceholder: string;
    emailPlaceholder: string;
    buttonDefault: string;
    buttonLoading: string;
    successMsg: string;
    existingMsg: string;
    errorMsg: string;
    consent: string;
    privacyLabel: string;
    privacyHref: string;
    unsubscribe: string;
  }
> = {
  de: {
    badge: '📧 Kostenloser Newsletter',
    headline: 'Freelancer-Tipps & neue Features',
    description:
      'Erhalte monatlich kostenlose Rechnungsvorlagen, Steuer-Tipps für Freelancer und Updates zu neuen Features. Kein Spam, jederzeit abmeldbar.',
    benefits: [
      { icon: '📄', title: 'Kostenlose Vorlagen', sub: 'Monatlich neue Rechnungsvorlagen' },
      { icon: '💡', title: 'Freelancer-Tipps', sub: 'Steuer & Buchhaltung einfach erklärt' },
      { icon: '🚀', title: 'Neue Features', sub: 'Als Erster von Updates erfahren' },
    ],
    namePlaceholder: 'Dein Name (optional)',
    emailPlaceholder: 'deine@email.de',
    buttonDefault: 'Jetzt kostenlos anmelden →',
    buttonLoading: 'Wird angemeldet...',
    successMsg: '✅ Erfolgreich angemeldet! Schau in dein Postfach.',
    existingMsg: 'Du bist bereits angemeldet! 😊',
    errorMsg: '❌ Fehler. Bitte versuche es erneut.',
    consent: 'Mit der Anmeldung stimmst du dem Erhalt von E-Mails zu.',
    privacyLabel: 'Datenschutz beachten.',
    privacyHref: '/datenschutz',
    unsubscribe: 'Jederzeit abmeldbar.',
  },
  en: {
    badge: '📧 Free Newsletter',
    headline: 'Freelancer Tips & New Features',
    description:
      'Get free invoice templates, tax tips and feature updates monthly. No spam, unsubscribe anytime.',
    benefits: [
      { icon: '📄', title: 'Free Templates', sub: 'Monthly new invoice templates' },
      { icon: '💡', title: 'Freelancer Tips', sub: 'Tax & accounting made simple' },
      { icon: '🚀', title: 'New Features', sub: 'Be the first to know about updates' },
    ],
    namePlaceholder: 'Your name (optional)',
    emailPlaceholder: 'your@email.com',
    buttonDefault: 'Subscribe for free →',
    buttonLoading: 'Subscribing...',
    successMsg: '✅ Successfully subscribed! Check your inbox.',
    existingMsg: 'You are already subscribed! 😊',
    errorMsg: '❌ Error. Please try again.',
    consent: 'By subscribing you agree to receive emails.',
    privacyLabel: 'Privacy policy.',
    privacyHref: '/en/datenschutz',
    unsubscribe: 'Unsubscribe anytime.',
  },
  fr: {
    badge: '📧 Newsletter Gratuit',
    headline: 'Conseils Freelance & Nouvelles Fonctionnalités',
    description:
      "Recevez chaque mois des modèles de factures gratuits, des conseils fiscaux et des mises à jour sur les nouvelles fonctionnalités. Sans spam, désinscription à tout moment.",
    benefits: [
      { icon: '📄', title: 'Modèles gratuits', sub: 'Nouveaux modèles de factures chaque mois' },
      { icon: '💡', title: 'Conseils Freelance', sub: 'Fiscalité & comptabilité simplifiées' },
      { icon: '🚀', title: 'Nouvelles fonctions', sub: 'Soyez le premier informé des mises à jour' },
    ],
    namePlaceholder: 'Votre nom (optionnel)',
    emailPlaceholder: 'votre@email.fr',
    buttonDefault: "S'abonner gratuitement →",
    buttonLoading: 'Inscription en cours...',
    successMsg: '✅ Inscription réussie ! Vérifiez votre boîte mail.',
    existingMsg: 'Vous êtes déjà abonné ! 😊',
    errorMsg: '❌ Erreur. Veuillez réessayer.',
    consent: "En vous inscrivant, vous acceptez de recevoir des e-mails.",
    privacyLabel: 'Politique de confidentialité.',
    privacyHref: '/fr/datenschutz',
    unsubscribe: 'Désinscription à tout moment.',
  },
  es: {
    badge: '📧 Newsletter Gratuito',
    headline: 'Consejos para Autónomos & Nuevas Funciones',
    description:
      'Recibe mensualmente plantillas de facturas gratuitas, consejos fiscales y actualizaciones de nuevas funciones. Sin spam, cancela cuando quieras.',
    benefits: [
      { icon: '📄', title: 'Plantillas gratuitas', sub: 'Nuevas plantillas de facturas cada mes' },
      { icon: '💡', title: 'Consejos para autónomos', sub: 'Impuestos y contabilidad fáciles' },
      { icon: '🚀', title: 'Nuevas funciones', sub: 'Entérate primero de las actualizaciones' },
    ],
    namePlaceholder: 'Tu nombre (opcional)',
    emailPlaceholder: 'tu@email.es',
    buttonDefault: 'Suscribirse gratis →',
    buttonLoading: 'Suscribiendo...',
    successMsg: '✅ ¡Suscripción exitosa! Revisa tu bandeja de entrada.',
    existingMsg: '¡Ya estás suscrito! 😊',
    errorMsg: '❌ Error. Por favor, inténtalo de nuevo.',
    consent: 'Al suscribirte, aceptas recibir correos electrónicos.',
    privacyLabel: 'Política de privacidad.',
    privacyHref: '/es/datenschutz',
    unsubscribe: 'Cancela cuando quieras.',
  },
};

interface Props {
  locale?: Locale;
}

export default function NewsletterForm({ locale = 'de' }: Props) {
  const t = CONTENT[locale];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'existing' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        return;
      }

      setStatus(data.existing ? 'existing' : 'success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="mt-10">
      <div
        className="rounded-2xl p-10"
        style={{
          background: 'linear-gradient(135deg, #0f1a0f 0%, #121318 100%)',
          border: '1px solid rgba(34,197,94,0.25)',
        }}
      >
        {/* Badge */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-400 ring-1 ring-emerald-500/40">
            {t.badge}
          </span>
        </div>

        {/* Headline */}
        <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
          {t.headline}
        </h2>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-xl text-center text-sm leading-relaxed text-slate-400 sm:text-base">
          {t.description}
        </p>

        {/* Benefits */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.benefits.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center gap-1 rounded-xl p-4 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-2xl" aria-hidden>
                {b.icon}
              </span>
              <span className="text-sm font-semibold text-slate-200">{b.title}</span>
              <span className="text-xs text-slate-500">{b.sub}</span>
            </div>
          ))}
        </div>

        {/* Form or success message */}
        {status === 'success' || status === 'existing' ? (
          <div
            className="mx-auto max-w-md rounded-xl p-4 text-center text-sm font-medium"
            style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80' }}
          >
            {status === 'success' ? t.successMsg : t.existingMsg}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-xl px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transform-none"
              style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
            >
              {status === 'loading' ? t.buttonLoading : t.buttonDefault}
            </button>

            {status === 'error' && (
              <div
                className="rounded-xl p-3 text-center text-sm"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}
              >
                {t.errorMsg}
              </div>
            )}

            <p className="text-center text-xs text-slate-600">
              {t.consent}{' '}
              <a href={t.privacyHref} className="underline hover:text-slate-400">
                {t.privacyLabel}
              </a>{' '}
              {t.unsubscribe}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
