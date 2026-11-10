'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { track } from '@vercel/analytics';

const STORAGE_KEY = 'gcg_user_segment_prompted';
const SHOW_DELAY_MS = 1000;

const SEGMENTS = [
  {
    segment: 'privat',
    label: 'Privatperson',
    href: '/privatverkauf',
    ctaLine: 'Für private Zahlungen haben wir eine passende Seite mit Tipps.',
  },
  {
    segment: 'freelancer',
    label: 'Selbständig / Freelancer',
    href: '/freelancer',
    ctaLine: 'Für Freelancer & Selbständige haben wir eine eigene Seite mit Tipps.',
  },
  {
    segment: 'kleinunternehmen',
    label: 'Kleinunternehmen / Firma',
    href: '/kleinunternehmen',
    ctaLine: 'Für Kleinunternehmen & Firmen haben wir eine eigene Seite mit Tipps.',
  },
  {
    segment: 'handwerker',
    label: 'Handwerker',
    href: '/handwerker',
    ctaLine: 'Für Handwerker haben wir eine eigene Seite mit Tipps.',
  },
  {
    segment: 'verein',
    label: 'Verein',
    href: '/verein',
    ctaLine: 'Für Vereine haben wir eine eigene Seite mit Tipps.',
  },
  {
    segment: 'spenden',
    label: 'Spenden / gemeinnützig',
    href: '/spenden',
    ctaLine: 'Für Spenden & gemeinnützige Zwecke haben wir eine eigene Seite mit Tipps.',
  },
  {
    segment: 'angestellt',
    label: 'Angestellt',
    href: '/rechnung-erstellen',
    ctaLine: 'Zum Erstellen von Rechnungen & Zahlungsaufforderungen haben wir eine eigene Seite.',
  },
] as const;

type SegmentOption = (typeof SEGMENTS)[number];

function wasPrompted(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    // Private Mode / blockierter Storage: lieber nicht anzeigen als bei jedem Generieren
    return true;
  }
}

function markPrompted() {
  try {
    window.localStorage.setItem(STORAGE_KEY, '1');
  } catch {
    // ignorieren
  }
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function SegmentPrompt({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<SegmentOption | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Schließen ohne Wahl zählt als Dismiss; nach einer Wahl wird nur geschlossen
  const close = useCallback(() => {
    if (!selected) track('segment_prompt_dismissed');
    onClose();
  }, [selected, onClose]);

  useEffect(() => {
    track('segment_prompt_shown');
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    return () => previouslyFocused?.focus?.();
  }, []);

  // Fokus nach Schrittwechsel in den Dialog zurückholen
  useEffect(() => {
    if (selected) dialogRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus();
  }, [selected]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      close();
      return;
    }
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const handleSelect = (option: SegmentOption) => {
    track('user_segment_selected', { segment: option.segment });
    setSelected(option);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-4 sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="segment-prompt-title"
        aria-describedby={selected ? undefined : 'segment-prompt-desc'}
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-lg rounded-2xl border border-[#1f2431] bg-[#0b0c10] p-5 text-slate-100 shadow-2xl sm:p-6"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px #1f2431' }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Schließen"
          className="absolute right-3 top-3 rounded-lg p-1.5 text-slate-500 transition hover:bg-[#1a1d25] hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e]"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
          </svg>
        </button>

        {!selected ? (
          <>
            <h2 id="segment-prompt-title" className="pr-8 text-lg font-semibold text-[#e8eaf0]">
              Wofür nutzt du den GiroCode?
            </h2>
            <p id="segment-prompt-desc" className="mt-1 text-xs text-slate-400">
              Freiwillig &amp; anonym – hilft uns, das Tool zu verbessern.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SEGMENTS.map((option) => (
                <button
                  key={option.segment}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className="rounded-xl border border-[#1f2431] bg-[#1a1d25] px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:border-[#22c55e]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e]"
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={close}
                className="text-xs text-slate-500 underline-offset-2 transition hover:text-slate-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e]"
              >
                Keine Angabe
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 id="segment-prompt-title" className="pr-8 text-base font-semibold text-[#e8eaf0]">
              {selected.ctaLine}
            </h2>
            <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={close}
                className="rounded-xl border border-[#1f2431] bg-[#1a1d25] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e]"
              >
                Schließen
              </button>
              <Link
                href={selected.href}
                data-autofocus
                onClick={() => {
                  track('segment_cta_clicked', { segment: selected.segment });
                  onClose();
                }}
                className="rounded-xl bg-[#22c55e] px-4 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10]"
              >
                Zur Seite →
              </Link>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}

/**
 * Einmaliges Segment-Popup nach dem Generieren (v1: nur locale de).
 * `trigger()` direkt nach dem Erfolgs-Tracking aufrufen, `prompt` irgendwo rendern.
 */
export function useSegmentPrompt(locale: string) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const trigger = useCallback(() => {
    if (locale !== 'de' || timerRef.current || wasPrompted()) return;
    timerRef.current = setTimeout(() => {
      if (wasPrompted()) return;
      markPrompted();
      setOpen(true);
    }, SHOW_DELAY_MS);
  }, [locale]);

  const close = useCallback(() => setOpen(false), []);

  return { trigger, prompt: open ? <SegmentPrompt onClose={close} /> : null };
}
