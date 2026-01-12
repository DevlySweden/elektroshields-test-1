const toAssetUrl = (path) => new URL(path.replace('/src', '..'), import.meta.url).href

const site = {
  language: {
    content: 'sv-SE',
    codeComments: 'en',
  },
  company: {
    name: 'Elektroshields',
    domain: 'elektroshields.se',
    location: 'Sverige',
    tagline: 'SkArmning & EMC-lAsningar med hAg finish',
    description:
      'Professionella lAsningar inom skArmning, EMC och relaterade installationer.',
  },
  contact: {
    email: 'info@elektroshields.se',
    phone: '+46 XX XXX XX XX',
  },
  branding: {
    accentColor: '#7c3aed',
    logoPath: '/src/assets/brand/logo.svg',
    logoUrl: toAssetUrl('/src/assets/brand/logo.svg'),
  },
  hero: {
    imagePath: '/src/assets/brand/hero.jpg',
    imageUrl: toAssetUrl('/src/assets/brand/hero.jpg'),
    badge: 'SkArmning ƒ?› EMC ƒ?› Installation',
    headline: 'Modern skArmning med fokus pA kvalitet.',
    subtext:
      'Vi hjAlper fAretag och projekt med lAsningar inom skArmning/EMC ƒ?" frAn plan till leverans.',
    ctaPrimary: 'Kontakta oss',
    ctaSecondary: 'Se projekt',
  },
  contactSection: {
    sectionTitle: 'Kontakt',
    sectionText: 'Beskriv kort vad du behAver hjAlp med sA Aterkommer vi.',
    form: {
      enabled: true,
      submitBehavior: 'mock',
      fields: {
        nameLabel: 'Namn',
        emailLabel: 'E-post',
        messageLabel: 'Meddelande',
        namePlaceholder: 'Ditt namn',
        emailPlaceholder: 'din@mail.se',
        messagePlaceholder: 'BerAtta kort...',
        submitText: 'Skicka',
      },
      disclaimerText:
        'FormulAret Ar en mock just nu. Vi kopplar det till e-post/API senare.',
    },
  },
  footer: {
    textTemplate: 'Ac {YEAR} {COMPANY}. Alla rAttigheter fArbehAllna.',
  },
}

export default site
