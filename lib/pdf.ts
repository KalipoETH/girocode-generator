import { de } from './translations/de';
import { en } from './translations/en';
import { es } from './translations/es';
import { fr } from './translations/fr';

export type PdfLocale = 'de' | 'en' | 'fr' | 'es';

// DIN A4 in Punkten
export const A4_WIDTH = 595.28;
export const A4_HEIGHT = 841.89;

export interface InvoiceData {
  invoiceNumber: string;
  invoiceDate: string;
  sender: string;
  recipient: string;
  description: string;
  netAmount: number;
  vatRate: number;
  qrPngDataUrl: string;
  logoBytes?: Uint8Array;
  logoMimeType?: 'image/png' | 'image/jpeg';
  iban?: string;
}

const PDF_TRANSLATIONS = { de: de.pdf, en: en.pdf, fr: fr.pdf, es: es.pdf } as const;

/**
 * Erzeugt eine Rechnungs-PDF (DIN A4, weißer Hintergrund) und gibt sie als Uint8Array zurück.
 */
export async function makePDF(data: InvoiceData, locale: PdfLocale = 'de'): Promise<Uint8Array> {
  const t = PDF_TRANSLATIONS[locale];
  const pdfLib = await import('pdf-lib');
  const { PDFDocument, StandardFonts, rgb } = pdfLib;

  const doc = await PDFDocument.create();
  const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);

  const margin = 50;

  // Weißer Hintergrund
  page.drawRectangle({
    x: 0,
    y: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT,
    color: rgb(1, 1, 1),
  });

  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);

  // Farb-Shortcuts
  const cBlack = rgb(0.1, 0.1, 0.1);
  const cGray = rgb(0.45, 0.45, 0.45);
  const cLightGray = rgb(0.8, 0.8, 0.8);
  const cBoxBg = rgb(0.95, 0.95, 0.95);
  const cAccent = rgb(0.0, 0.6, 0.3);

  const formatAmount = (v: number) => `${v.toFixed(2).replace('.', ',')} €`;

  // ─── HEADER ──────────────────────────────────────────────────────────────
  const headerTopY = A4_HEIGHT - 40;

  // Titel links
  page.drawText(t.title, {
    x: margin,
    y: headerTopY,
    size: 24,
    font: helveticaBold,
    color: cBlack,
  });

  // Rechnungsnummer & Datum
  page.drawText(`${t.invoiceNo} ${data.invoiceNumber}`, {
    x: margin,
    y: headerTopY - 32,
    size: 10,
    font: helvetica,
    color: cGray,
  });
  page.drawText(`${t.date} ${data.invoiceDate}`, {
    x: margin,
    y: headerTopY - 46,
    size: 10,
    font: helvetica,
    color: cGray,
  });

  // Logo rechts (max 100 × 60 px, Seitenverhältnis beibehalten)
  if (data.logoBytes && data.logoBytes.length > 0) {
    try {
      const logoImage =
        data.logoMimeType === 'image/jpeg'
          ? await doc.embedJpg(data.logoBytes)
          : await doc.embedPng(data.logoBytes);

      const maxW = 100;
      const maxH = 60;
      const scaleW = maxW / logoImage.width;
      const scaleH = maxH / logoImage.height;
      const scale = Math.min(scaleW, scaleH, 1);
      const logoW = logoImage.width * scale;
      const logoH = logoImage.height * scale;

      page.drawImage(logoImage, {
        x: A4_WIDTH - margin - logoW,
        y: headerTopY - logoH + 6,
        width: logoW,
        height: logoH,
      });
    } catch {
      // Logo-Fehler ignorieren, PDF wird trotzdem erzeugt
    }
  }

  // ─── TRENNLINIE (nicht durch Logo-Bereich) ────────────────────────────────
  const separatorY = headerTopY - 60;
  page.drawLine({
    start: { x: margin, y: separatorY },
    end: { x: 380, y: separatorY },
    thickness: 0.5,
    color: cLightGray,
  });

  // ─── ADRESSEN (zwei Spalten) ──────────────────────────────────────────────
  const addrLabelY = separatorY - 22;
  const addrTextY = addrLabelY - 14;
  const rightColX = 300;
  const addrLineH = 14;

  // Label "Absender" / "Empfänger"
  page.drawText(t.sender, {
    x: margin,
    y: addrLabelY,
    size: 8,
    font: helveticaBold,
    color: cGray,
  });
  page.drawText(t.recipient, {
    x: rightColX,
    y: addrLabelY,
    size: 8,
    font: helveticaBold,
    color: cGray,
  });

  // Absender zeilenweise
  const senderLines = (data.sender || '').split('\n');
  let senderEndY = addrTextY;
  for (const line of senderLines) {
    page.drawText(line || ' ', { x: margin, y: senderEndY, size: 9, font: helvetica, color: cBlack });
    senderEndY -= addrLineH;
  }

  // Empfänger zeilenweise
  const recipientLines = (data.recipient || '').split('\n');
  let recipientEndY = addrTextY;
  for (const line of recipientLines) {
    page.drawText(line || ' ', { x: rightColX, y: recipientEndY, size: 9, font: helvetica, color: cBlack });
    recipientEndY -= addrLineH;
  }

  let cursorY = Math.min(senderEndY, recipientEndY) - 28;

  // ─── LEISTUNGSBESCHREIBUNG ────────────────────────────────────────────────
  page.drawText(t.serviceDescription, {
    x: margin,
    y: cursorY,
    size: 10,
    font: helveticaBold,
    color: cGray,
  });
  cursorY -= 16;

  // Zeilenweise (zuerst \n aufteilen, dann Wortumbruch)
  const descMaxWidth = A4_WIDTH - margin * 2;
  const descRawLines = (data.description || '').split('\n');
  const descLines: string[] = [];

  for (const rawLine of descRawLines) {
    if (descLines.length >= 8) break;
    if (!rawLine.trim()) {
      descLines.push('');
      continue;
    }
    const words = rawLine.split(/\s+/).filter(Boolean);
    let current = '';
    for (const word of words) {
      if (descLines.length >= 8) break;
      const test = current ? `${current} ${word}` : word;
      if (helvetica.widthOfTextAtSize(test, 9) > descMaxWidth && current) {
        descLines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current && descLines.length < 8) descLines.push(current);
  }

  for (const line of descLines.slice(0, 8)) {
    page.drawText(line || ' ', { x: margin, y: cursorY, size: 9, font: helvetica, color: cBlack });
    cursorY -= 13;
  }

  // ─── BETRAGSBOX + QR-CODE ─────────────────────────────────────────────────
  // Dynamische Y-Position: Box rutscht nach oben wenn wenig Beschreibungstext vorhanden
  const descriptionLines = (data.description || '').split('\n').length;
  const sectionTopY = Math.min(550, 680 - (descriptionLines * 14));

  const net = data.netAmount;
  const vatAmount = Math.round(net * data.vatRate * 100) / 100 / 100;
  const gross = net + vatAmount;

  // Box-Dimensionen
  const boxWidth = 250;
  const boxX = margin;
  const boxRowH = 22;
  const boxPadV = 14;
  const boxHeight = boxPadV + boxRowH + boxRowH + 12 + 16 + boxPadV; // header + netto + ust + sep-gap + brutto + bottom
  const boxY = sectionTopY - boxHeight;

  page.drawRectangle({
    x: boxX,
    y: boxY,
    width: boxWidth,
    height: boxHeight,
    color: cBoxBg,
    borderColor: cLightGray,
    borderWidth: 0.5,
  });

  const boxRight = boxX + boxWidth - 12;

  // Netto
  const row1Y = boxY + boxHeight - boxPadV - 9;
  page.drawText(t.net, { x: boxX + 12, y: row1Y, size: 9, font: helvetica, color: cGray });
  const netStr = formatAmount(net);
  page.drawText(netStr, {
    x: boxRight - helvetica.widthOfTextAtSize(netStr, 10),
    y: row1Y,
    size: 10,
    font: helvetica,
    color: cBlack,
  });

  // USt
  const vatPct = `${data.vatRate.toFixed(2).replace('.', ',')} %`;
  const vatLabel = `${t.vat} (${vatPct})`;
  const row2Y = row1Y - boxRowH;
  page.drawText(vatLabel, { x: boxX + 12, y: row2Y, size: 9, font: helvetica, color: cGray });
  const vatStr = formatAmount(vatAmount);
  page.drawText(vatStr, {
    x: boxRight - helvetica.widthOfTextAtSize(vatStr, 10),
    y: row2Y,
    size: 10,
    font: helvetica,
    color: cBlack,
  });

  // Trennlinie innerhalb Box
  const innerSepY = row2Y - 12;
  page.drawLine({
    start: { x: boxX + 12, y: innerSepY },
    end: { x: boxX + boxWidth - 12, y: innerSepY },
    thickness: 0.5,
    color: cLightGray,
  });

  // Brutto gesamt
  const row3Y = innerSepY - 14;
  page.drawText(t.gross, { x: boxX + 12, y: row3Y, size: 10, font: helveticaBold, color: cAccent });
  const grossStr = formatAmount(gross);
  page.drawText(grossStr, {
    x: boxRight - helveticaBold.widthOfTextAtSize(grossStr, 12),
    y: row3Y,
    size: 12,
    font: helveticaBold,
    color: cAccent,
  });

  // QR-Code rechts neben der Box (gleiche Start-Y wie Box-Oberkante)
  const qrSize = 150;
  const qrX = 350;
  const qrTopY = sectionTopY;
  const qrBottomY = qrTopY - qrSize;

  try {
    const qrBase64 = data.qrPngDataUrl.split(',')[1];
    const qrBytes = Uint8Array.from(atob(qrBase64), (ch) => ch.charCodeAt(0));
    const qrImage = await doc.embedPng(qrBytes);
    page.drawImage(qrImage, { x: qrX, y: qrBottomY, width: qrSize, height: qrSize });
  } catch {
    // QR-Fehler ignorieren
  }

  // Gemeinsame Y-Höhe für Zahlungshinweis (links) und QR-Hinweis (rechts)
  const noteY = Math.min(boxY, qrBottomY) - 18;

  // ─── ZAHLUNGSHINWEIS (links, gleiche Höhe wie QR-Hinweis) ────────────────
  page.drawText(t.paymentNote, {
    x: margin,
    y: noteY,
    size: 8,
    font: helvetica,
    color: cGray,
  });

  // ─── QR-HINWEIS + IBAN (rechts, gleiche Höhe wie Zahlungshinweis) ─────────
  page.drawText(t.qrHint, { x: qrX, y: noteY, size: 7, font: helvetica, color: cGray });

  if (data.iban && data.iban.length >= 8) {
    const ibanClean = data.iban.replace(/\s/g, '');
    const ibanMasked = `IBAN: ${ibanClean.slice(0, 4)}...${ibanClean.slice(-4)}`;
    page.drawText(ibanMasked, { x: qrX, y: noteY - 12, size: 7, font: helvetica, color: cGray });
  }

  // ─── FUSSZEILE ────────────────────────────────────────────────────────────
  const footerLineY = 45;
  page.drawLine({
    start: { x: margin, y: footerLineY },
    end: { x: A4_WIDTH - margin, y: footerLineY },
    thickness: 0.5,
    color: cLightGray,
  });

  const footerText = t.footer;
  const footerTextW = helvetica.widthOfTextAtSize(footerText, 7);
  page.drawText(footerText, {
    x: (A4_WIDTH - footerTextW) / 2,
    y: footerLineY - 12,
    size: 7,
    font: helvetica,
    color: cGray,
  });

  return doc.save();
}
