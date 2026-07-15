import { test } from 'node:test';
import assert from 'node:assert/strict';
import { redactQueryParams } from './analyticsRedaction.ts';

const BASE = 'https://girocodegenerator.com/de/generator';

test('der reale Leak-Fall: Scanner-URL mit Zahldaten wird zur sauberen URL', () => {
  const leaky =
    `${BASE}?name=Max%20Mustermann&iban=DE89370400440532013000` +
    '&bic=COBADEFFXXX&amount=42.00&purpose=Rechnung%201234';

  const { url } = redactQueryParams({ url: leaky });

  assert.equal(url, `${BASE}`);
  // Kein einziger sensibler Wert überlebt.
  for (const secret of ['Mustermann', 'DE89', 'COBADEFF', '42.00', 'Rechnung']) {
    assert.equal(url.includes(secret), false, `"${secret}" durfte nicht in der URL bleiben`);
  }
});

test('Allowlist bleibt vollständig erhalten (source + utm_*)', () => {
  const params = new URLSearchParams({
    source: 'pwa',
    utm_source: 'newsletter',
    utm_medium: 'email',
    utm_campaign: 'launch',
    utm_content: 'hero',
    utm_term: 'girocode',
  });
  const { url } = redactQueryParams({ url: `${BASE}?${params.toString()}` });

  const out = new URL(url).searchParams;
  assert.equal(out.get('source'), 'pwa');
  assert.equal(out.get('utm_source'), 'newsletter');
  assert.equal(out.get('utm_medium'), 'email');
  assert.equal(out.get('utm_campaign'), 'launch');
  assert.equal(out.get('utm_content'), 'hero');
  assert.equal(out.get('utm_term'), 'girocode');
});

test('erlaubte und sensible Parameter gemischt: nur die sensiblen fallen weg', () => {
  const { url } = redactQueryParams({
    url: `${BASE}?utm_source=newsletter&iban=DE89370400440532013000&source=pwa`,
  });
  const out = new URL(url).searchParams;
  assert.equal(out.get('utm_source'), 'newsletter');
  assert.equal(out.get('source'), 'pwa');
  assert.equal(out.has('iban'), false);
});

test('utm_-Präfix-Bypass-Versuch (utm_iban) wird NICHT durchgelassen — exakter Match, kein Wildcard', () => {
  const { url } = redactQueryParams({
    url: `${BASE}?utm_iban=DE89370400440532013000&utm_name=Max`,
  });
  const out = new URL(url).searchParams;
  assert.equal(out.has('utm_iban'), false);
  assert.equal(out.has('utm_name'), false);
  assert.equal(url, `${BASE}`);
});

test('unbekannter neuer Parameter wird entfernt (Default-Deny)', () => {
  // Ein künftiges Feature mit neuem Parameternamen ist automatisch geschützt.
  const { url } = redactQueryParams({ url: `${BASE}?future_field=geheim` });
  assert.equal(url, `${BASE}`);
});

test('nicht parsebare URL → fail-closed: alles ab "?" wird abgeschnitten', () => {
  // Relative URL ohne Basis wirft in new URL() → catch-Zweig.
  const { url } = redactQueryParams({ url: '/de/generator?iban=DE89370400440532013000' });
  assert.equal(url, '/de/generator');
  assert.equal(url.includes('iban'), false);
});

test('nicht parsebare URL ohne Query bleibt unverändert', () => {
  const { url } = redactQueryParams({ url: '/de/generator' });
  assert.equal(url, '/de/generator');
});

test('CustomEvent: nur url wird bereinigt, übrige Felder bleiben erhalten', () => {
  const event = {
    name: 'scan_reuse',
    url: `${BASE}?iban=DE89370400440532013000&utm_source=newsletter`,
    someMeta: 123,
  };
  const out = redactQueryParams(event);

  assert.equal(out.name, 'scan_reuse');
  assert.equal(out.someMeta, 123);
  assert.equal(new URL(out.url).searchParams.has('iban'), false);
  assert.equal(new URL(out.url).searchParams.get('utm_source'), 'newsletter');
});

test('Eingabe-Objekt wird nicht mutiert (reine Funktion)', () => {
  const event = { url: `${BASE}?iban=DE89370400440532013000` };
  redactQueryParams(event);
  assert.equal(event.url, `${BASE}?iban=DE89370400440532013000`);
});
