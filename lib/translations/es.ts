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
      {
        q: '¿Es seguro crear un GiroCode?',
        a: 'Sí. Todos los datos se procesan exclusivamente de forma local en tu navegador. Tu IBAN, el importe y el concepto nunca abandonan tu ordenador. No se realiza ninguna transmisión a nuestros servidores.',
      },
      {
        q: '¿Qué datos se almacenan en un GiroCode?',
        a: 'Un GiroCode contiene: nombre del beneficiario, IBAN, BIC (opcional), importe (opcional, p. ej. EUR49.90) y un concepto de pago (opcional, máx. 140 caracteres). No se almacenan datos personales del pagador.',
      },
      {
        q: '¿Por qué mi aplicación bancaria no reconoce el GiroCode?',
        a: 'Causas habituales: el código está impreso demasiado pequeño (tamaño mínimo 2x2 cm), mala iluminación, reflejos en la pantalla o la aplicación no admite la norma EPC. Consejo: aumenta el brillo y mantén una distancia de 15 a 30 cm.',
      },
      {
        q: '¿Un GiroCode es lo mismo que un código QR EPC?',
        a: 'Sí. GiroCode es el nombre comercial alemán del código QR EPC (European Payments Council). En Austria se llama Stuzza-QR, en Suiza QR-Bill. Todos se basan en el mismo estándar.',
      },
      {
        q: '¿Cuánto tiempo es válido un GiroCode?',
        a: 'Un GiroCode no tiene fecha de caducidad. Es válido de forma permanente mientras los datos de la cuenta que contiene (IBAN, nombre del beneficiario) sigan siendo actuales.',
      },
      {
        q: '¿Puede alguien domiciliar cargos en mi cuenta con mi GiroCode?',
        a: 'No. Un GiroCode es una solicitud de pago, no un mandato de domiciliación. Solo el pagador puede iniciar activamente una transferencia y debe confirmarla con TAN o biometría. Conocer tu IBAN no permite a nadie cargar dinero en tu cuenta.',
      },
    ],
  },
  footer: {
    local: 'local',
    noWarranty: 'sin garantía',
  },
} as const;

