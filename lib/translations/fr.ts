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
      {
        q: 'La création d\'un GiroCode est-elle sécurisée ?',
        a: 'Oui. Toutes les données sont traitées exclusivement en local dans votre navigateur. Votre IBAN, le montant et la référence de paiement ne quittent jamais votre ordinateur. Aucune transmission à nos serveurs n\'a lieu.',
      },
      {
        q: 'Quelles données sont stockées dans un GiroCode ?',
        a: 'Un GiroCode contient : le nom du bénéficiaire, l\'IBAN, le BIC (optionnel), le montant (optionnel, ex. EUR49.90) et une référence de paiement (optionnelle, max. 140 caractères). Aucune donnée personnelle du payeur n\'est stockée.',
      },
      {
        q: 'Pourquoi mon application bancaire ne reconnaît-elle pas le GiroCode ?',
        a: 'Causes fréquentes : le code est imprimé trop petit (taille minimale 2x2 cm), mauvais éclairage, reflets sur l\'écran ou l\'application ne supporte pas la norme EPC. Conseil : augmentez la luminosité et maintenez une distance de 15 à 30 cm.',
      },
      {
        q: 'Un GiroCode est-il identique à un code QR EPC ?',
        a: 'Oui. GiroCode est le nom de marque allemand du code QR EPC (European Payments Council). En Autriche, il s\'appelle Stuzza-QR, en Suisse QR-Bill. Tous sont basés sur le même standard.',
      },
      {
        q: 'Quelle est la durée de validité d\'un GiroCode ?',
        a: 'Un GiroCode n\'a pas de date d\'expiration. Il reste valide aussi longtemps que les coordonnées bancaires qu\'il contient (IBAN, nom du bénéficiaire) sont à jour.',
      },
      {
        q: 'Quelqu\'un peut-il prélever de l\'argent sur mon compte grâce à mon GiroCode ?',
        a: 'Non. Un GiroCode est une demande de paiement, pas un mandat de prélèvement. Seul le payeur peut initier activement un virement et doit le confirmer par TAN ou biométrie. Connaître votre IBAN ne permet à personne de prélever de l\'argent.',
      },
    ],
  },
  footer: {
    local: 'local',
    noWarranty: 'sans garantie',
  },
} as const;

