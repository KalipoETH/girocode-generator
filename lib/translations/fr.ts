export const fr = {
  nav: {
    home: 'Accueil',
    knowledge: 'Informations',
    about: 'À propos',
    imprint: 'Mentions légales',
    privacy: 'Confidentialité',
    developers: 'Pour les développeurs',
  },
  hero: {
    badge: '100% local · aucun téléchargement',
    title: 'Générateur GiroCode',
    subtitle:
      'Créez des codes QR SEPA et des factures PDF – entièrement dans votre navigateur, sans transmission de données.',
  },
  form: {
    paymentData: 'Données de paiement',
    recipient: 'Bénéficiaire (Nom)',
    iban: 'IBAN',
    bic: 'BIC (optionnel)',
    amount: 'Montant (EUR)',
    purpose: 'Référence de paiement',
    generate: 'Générer GiroCode',
    reset: 'Réinitialiser',
    ibanValid: 'Vérification IBAN : valide',
    ibanInvalid: 'Vérification IBAN : invalide',
  },
  qr: {
    title: 'Aperçu (QR)',
    tip: "Ouvrez votre application bancaire et testez le code.",
    fallback:
      'Repli QR externe (api.qrserver.com) – envoie les données de paiement au service.',
    success:
      "QR généré avec succès. Testez avec votre application bancaire.",
  },
  pdf: {
    title: 'Facture',
    invoiceNo: 'N°:',
    date: 'Date:',
    sender: 'Expéditeur',
    recipient: 'Destinataire',
    serviceDescription: 'Description de la prestation',
    net: 'Net HT',
    vat: 'TVA',
    gross: 'Total TTC',
    footer: 'Généré localement · aucune transmission de données',
  },
  invoice: {
    title: 'Facture (PDF)',
    invoiceNo: 'N° de facture',
    invoiceDate: 'Date de facture',
    seller: 'Coordonnées de votre entreprise',
    buyer: 'Coordonnées du client',
    logo: 'Logo (PNG/JPG, optionnel)',
    description: 'Description du service',
    net: 'Montant HT (EUR)',
    vat: 'Taux TVA (%)',
    vatAmount: 'Montant TVA',
    gross: 'Montant TTC',
    download: 'Télécharger PDF',
  },
  seo: {
    howTitle: 'Créer un GiroCode gratuitement – voici comment',
    howText:
      'Un GiroCode (également appelé SEPA-QR ou EPC-QR) est un code QR standardisé qui contient toutes les informations nécessaires pour un virement bancaire SEPA. Avec notre générateur gratuit, vous pouvez créer des GiroCodes directement dans votre navigateur – sans inscription, sans transmission de données.',
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Le générateur GiroCode est-il vraiment gratuit ?',
        a: 'Oui, entièrement gratuit – sans inscription, sans abonnement.',
      },
      {
        q: 'Mes données sont-elles stockées ?',
        a: "Non. Tout le traitement se fait localement dans votre navigateur. Aucune donnée n'est transmise à nos serveurs.",
      },
      {
        q: 'Quelles applications bancaires supportent les GiroCodes ?',
        a: 'La plupart des applications bancaires européennes supportent les codes QR SEPA.',
      },
      {
        q: 'Dois-je saisir un montant ?',
        a: 'Non, le montant est optionnel.',
      },
      {
        q: 'Puis-je intégrer le GiroCode dans une facture ?',
        a: 'Oui ! Utilisez notre fonction de facture PDF pour créer une facture professionnelle avec GiroCode intégré.',
      },
    ],
  },
  footer: {
    local: 'local',
    noWarranty: 'sans garantie',
  },
} as const;

