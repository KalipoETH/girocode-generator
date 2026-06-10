export const it = {
  nav: {
    home: 'Home',
    knowledge: 'Informazioni',
    about: 'Chi siamo',
    imprint: 'Note legali',
    privacy: 'Privacy',
    developers: 'Per sviluppatori',
  },
  hero: {
    badge: '100% locale · nessun upload',
    title: 'Generatore di Codici QR EPC',
    subtitle:
      'Crea codici QR EPC (GiroCode) per bonifici SEPA in pochi secondi. Gratuito, senza registrazione, 100% locale nel tuo browser.',
  },
  form: {
    paymentData: 'Dati di pagamento',
    recipient: 'Beneficiario (Nome)',
    iban: 'IBAN',
    bic: 'BIC (opzionale)',
    amount: 'Importo (EUR)',
    purpose: 'Causale',
    generate: 'Genera GiroCode',
    reset: 'Reimposta',
    ibanValid: 'Controllo IBAN: valido',
    ibanInvalid: 'Controllo IBAN: non valido',
  },
  qr: {
    title: 'Anteprima (QR)',
    tip: 'Apri la tua app bancaria e testa il codice.',
    fallback:
      'Fallback QR esterno (api.qrserver.com) – invia i dati di pagamento al servizio.',
    success: 'QR generato con successo. Testa con la tua app bancaria.',
  },
  pdf: {
    title: 'Fattura',
    invoiceNo: 'N°:',
    date: 'Data:',
    sender: 'Mittente',
    recipient: 'Destinatario',
    serviceDescription: 'Descrizione del servizio',
    net: 'Netto',
    vat: 'IVA',
    gross: 'Totale lordo',
    footer: 'Generato localmente nel browser · nessuna trasmissione dati',
    qrHint: 'GiroCode – scansiona con app bancaria',
    paymentNote: 'Pagabile entro 14 giorni senza detrazione',
  },
  invoice: {
    title: 'Fattura (PDF)',
    invoiceNo: 'N° fattura',
    invoiceDate: 'Data fattura',
    seller: 'Dati della tua azienda',
    buyer: 'Dati del cliente',
    logo: 'Logo (PNG/JPG, opzionale)',
    description: 'Descrizione del servizio',
    net: 'Importo netto (EUR)',
    vat: 'Aliquota IVA (%)',
    vatAmount: 'Importo IVA',
    gross: 'Importo lordo',
    download: 'Scarica PDF',
  },
  seo: {
    howTitle: 'Crea un GiroCode gratis – ecco come',
    howText:
      'Un GiroCode (noto anche come QR SEPA o QR EPC) è un codice QR standardizzato che contiene tutte le informazioni per un bonifico SEPA. Con il nostro generatore gratuito puoi crearlo direttamente nel browser – senza registrazione, senza trasmissione dati.',
    faqTitle: 'Domande frequenti',
    faq: [
      {
        q: "Cos'è un codice QR EPC?",
        a: 'Un codice QR EPC è un QR code standardizzato per i bonifici SEPA secondo lo standard EPC069-12. Contiene tutti i dati per un bonifico: nome beneficiario, IBAN, importo opzionale e causale opzionale.',
      },
      {
        q: 'Il generatore è davvero gratuito?',
        a: 'Sì, completamente gratuito – senza abbonamento, senza registrazione, senza costi nascosti.',
      },
      {
        q: 'I miei dati bancari sono al sicuro?',
        a: 'Sì. Tutti i dati vengono elaborati localmente nel tuo browser. Nessun IBAN, importo o dato viene inviato ai nostri server.',
      },
      {
        q: 'Quali app bancarie supportano il codice QR EPC?',
        a: 'Le principali app bancarie italiane e europee supportano il codice QR EPC: Intesa Sanpaolo, UniCredit, Banco BPM, Fineco e molte altre.',
      },
      {
        q: 'Posso aggiungere il QR alle mie fatture?',
        a: 'Sì. Usa il nostro generatore di fatture PDF per incorporare automaticamente il QR code nella tua fattura.',
      },
      {
        q: 'È lo stesso di GiroCode?',
        a: 'Sì. GiroCode è il nome tedesco per il codice QR EPC. In Austria si chiama Stuzza QR. Tutti seguono lo stesso standard EPC069-12.',
      },
      {
        q: 'Il QR EPC diventerà obbligatorio in Italia?',
        a: "L'iniziativa ViDA dell'UE prevede l'obbligo di QR SEPA sulle fatture per tutti i paesi UE entro il 2030.",
      },
    ],
  },
  footer: {
    local: 'locale',
    noWarranty: 'nessuna garanzia',
  },
} as const;
