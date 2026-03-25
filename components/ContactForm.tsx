'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  badge: string;
  heading: string;
  subheading: string;
  labelName: string;
  labelEmail: string;
  labelMessage: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  buttonIdle: string;
  buttonLoading: string;
  successMsg: string;
  errorMsg: string;
}

export function ContactForm({
  badge,
  heading,
  subheading,
  labelName,
  labelEmail,
  labelMessage,
  placeholderName,
  placeholderEmail,
  placeholderMessage,
  buttonIdle,
  buttonLoading,
  successMsg,
  errorMsg,
}: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:py-14">
      <header className="mb-10 space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {badge}
        </p>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            {heading}
          </h1>
          <p className="mt-1 max-w-xl text-sm text-slate-400 md:text-base">
            {subheading}
          </p>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30"
      >
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-300">
            {labelName} <span className="text-emerald-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder={placeholderName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-300">
            {labelEmail} <span className="text-emerald-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder={placeholderEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-300">
            {labelMessage} <span className="text-emerald-400">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder={placeholderMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-y rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition hover:from-emerald-400 hover:to-teal-400 disabled:opacity-60"
        >
          {loading ? buttonLoading : buttonIdle}
        </button>

        {success && (
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            {successMsg}
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {errorMsg}
          </div>
        )}
      </form>
    </div>
  );
}
