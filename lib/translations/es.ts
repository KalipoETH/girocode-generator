export const es = {
  nav: {
    home: 'Inicio',
    knowledge: 'Información',
    about: 'Sobre nosotros',
    imprint: 'Aviso legal',
    privacy: 'Privacidad',
    developers: 'Para desarrolladores',
  },
  hero: {
    badge: '100% local · sin subidas',
    title: 'Generador GiroCode',
    subtitle:
      'Crea códigos QR SEPA y facturas PDF – completamente en tu navegador, sin transmisión de datos.',
  },
  form: {
    paymentData: 'Datos de pago',
    recipient: 'Beneficiario (Nombre)',
    iban: 'IBAN',
    bic: 'BIC (opcional)',
    amount: 'Importe (EUR)',
    purpose: 'Concepto de pago',
    generate: 'Generar GiroCode',
    reset: 'Restablecer',
    ibanValid: 'Verificación IBAN: válido',
    ibanInvalid: 'Verificación IBAN: inválido',
  },
  qr: {
    title: 'Vista previa (QR)',
    tip: 'Abre tu aplicación bancaria y prueba el código.',
    fallback:
      'Respaldo QR externo (api.qrserver.com) – envía datos de pago al servicio.',
    success:
      'QR generado con éxito. Prueba con tu aplicación bancaria.',
  },
  pdf: {
    title: 'Factura',
    invoiceNo: 'N.º:',
    date: 'Fecha:',
    sender: 'Remitente',
    recipient: 'Destinatario',
    serviceDescription: 'Descripción del servicio',
    net: 'Neto',
    vat: 'IVA',
    gross: 'Bruto total',
    footer: 'Generado localmente · sin transmisión de datos',
  },
  invoice: {
    title: 'Factura (PDF)',
    invoiceNo: 'N.º de factura',
    invoiceDate: 'Fecha de factura',
    seller: 'Datos de tu empresa',
    buyer: 'Datos del cliente',
    logo: 'Logo (PNG/JPG, opcional)',
    description: 'Descripción del servicio',
    net: 'Importe neto (EUR)',
    vat: 'Tipo IVA (%)',
    vatAmount: 'Importe IVA',
    gross: 'Importe bruto',
    download: 'Descargar PDF',
  },
  seo: {
    howTitle: 'Crear un GiroCode gratis – así funciona',
    howText:
      'Un GiroCode (también conocido como SEPA-QR o EPC-QR) es un código QR estandarizado que contiene toda la información necesaria para una transferencia bancaria SEPA. Con nuestro generador gratuito, puedes crear GiroCodes directamente en tu navegador – sin registro, sin transmisión de datos.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Es realmente gratuito el generador GiroCode?',
        a: 'Sí, completamente gratuito – sin registro, sin suscripción.',
      },
      {
        q: '¿Se almacenan mis datos?',
        a: 'No. Todo el procesamiento ocurre localmente en tu navegador. No se transmiten datos a nuestros servidores.',
      },
      {
        q: '¿Qué aplicaciones bancarias admiten GiroCodes?',
        a: 'La mayoría de las aplicaciones bancarias europeas admiten códigos QR SEPA.',
      },
      {
        q: '¿Tengo que introducir un importe?',
        a: 'No, el importe es opcional.',
      },
      {
        q: '¿Puedo incluir el GiroCode en una factura?',
        a: 'Sí. Usa nuestra función de factura PDF para crear una factura profesional con GiroCode integrado.',
      },
    ],
  },
  footer: {
    local: 'local',
    noWarranty: 'sin garantía',
  },
} as const;

