export const services_full = [
  {
    icon: 'LibraryBig',
    title: 'Löpande bokföring',
    description:
      'Bokföringen hålls alltid uppdaterad och korrekt, för full kontroll över företagets ekonomi.',
    plans: [
      {
        name: 'Mini',
        price: 295,
        period: 'månad',
        revenue: '0 – 10 000 kr/mån',
        description:
          'För nystartade företag, hobbyverksamhet eller testprojekt utan löpande fakturering.',
        features: [
          'Månadsavstämning av konton',
          'Grundläggande rapportering',
          'E-postsupport'
        ]
      },
      {
        name: 'Mellan',
        price: 495,
        period: 'månad',
        revenue: '10 001 – 100 000 kr/mån',
        description: 'För små firmor med några få transaktioner i månaden.',
        features: [
          'Månadsavstämning av konton',
          'Månatlig ekonomisk rapportering',
          'E-post- och telefonsupport'
        ]
      },
      {
        name: 'Stor',
        price: 995,
        period: 'månad',
        revenue: '100 001 – 500 000 kr/mån',
        description: 'För etablerade småföretag med regelbunden verksamhet.',
        features: [
          'Månadsavstämning av konton',
          'Månatlig ekonomisk rapportering',
          'E-post- och telefonsupport'
        ]
      }
    ]
  },
  {
    icon: 'Coins',
    title: 'Momsrapport',
    description:
      'Momsrapport sammanställs och skickas till Skatteverket korrekt och i tid – oavsett om den gäller månadsvis, kvartalsvis eller årlig rapportering.',
    plans: [
      {
        name: 'Månadsrapportering',
        price: 399,
        period: 'tillfälle',
        description:
          'För företag med månadsvis momsrapportering som vill säkerställa korrekta och punktliga inlämningar.'
      },
      {
        name: 'Kvartalsrapportering',
        price: 399,
        period: 'tillfälle',
        description:
          'För företag med kvartalsvis momsrapportering som vill ha trygghet i att allt redovisas rätt varje kvartal.'
      },
      {
        name: 'Årsrapportering',
        price: 399,
        period: 'tillfälle',
        description:
          'För företag som redovisar moms en gång per år och vill ha en smidig process inför bokslutet.'
      }
    ]
  },
  {
    icon: 'BarChart3',
    title: 'Årsredovisning',
    description:
      'Komplett årsredovisning med bokslut enligt gällande lagar och regler, inklusive analys och rådgivning.',
    plans: [
      {
        name: 'Årsredovisning med årsbokslut för aktiebolag',
        price: 1200,
        period: 'år',
        description:
          'Fullständig årsredovisning med resultat- och balansräkning, inklusive inskick till Bolagsverket.'
      },
      {
        name: 'NE-bilaga för enskild firma',
        price: 900,
        period: 'år',
        description:
          'Utfyllnad av NE-bilaga inklusive inlämning till Skatteverket.'
      }
    ]
  },
  {
    icon: 'FileText',
    title: 'Inkomstdeklaration',
    description:
      'Deklarationen upprättas och lämnas in korrekt och i tid – för både enskild firma och aktiebolag.',
    plans: [
      {
        name: 'INK1 (Enskild firma eller privatperson)',
        price: 1500,
        period: 'engång',
        description:
          'Fullständig inkomstdeklaration för enskild firma inklusive alla bilagor och inlämning till Skatteverket.',
        features: [
          'Upprättande av INK1-blankett',
          'Alla nödvändiga bilagor',
          'Skatteberäkning och optimering',
          'Elektronisk inlämning till Skatteverket',
          'Inkluderar NE-bilaga vid behov'
        ]
      },
      {
        name: 'INK2 (Aktiebolag)',
        price: 2500,
        period: 'engång',
        description:
          'Korrekt upprättad inkomstdeklaration för aktiebolag enligt aktiebolagslagen, med alla erforderliga bilagor.',
        features: [
          'Upprättande av INK2-blanketter (INK2R och INK2S)',
          'Skatteberäkning för företaget',
          'Kontroll mot bokslut och årsredovisning',
          'Elektronisk inlämning till Skatteverket'
        ]
      }
    ]
  },
  {
    icon: 'ReceiptText',
    title: 'Faktureringstjänst',
    description:
      'Fakturor skapas, skickas och följs upp – administrationen minskar och betalningarna kommer in snabbare.',
    plans: [
      {
        name: 'Bas',
        price: 199,
        period: 'månad',
        description:
          'För små företag som vill ha hjälp med grundläggande fakturering och uppföljning.',
        features: ['Skapande och utskick av upp till 15 fakturor per månad']
      },
      {
        name: 'Pro',
        price: 399,
        period: 'månad',
        description:
          'För företag med regelbunden fakturering och behov av mer omfattande tjänster.',
        features: [
          'Skapande och utskick av upp till 50 fakturor per månad',
          'Automatiska påminnelser för obetalda fakturor'
        ]
      }
    ]
  },
  {
    icon: 'Handshake',
    title: 'Personlig rådgivning',
    description:
      'Skräddarsydd rådgivning och strategier för att optimera företagets ekonomi och planera för framtiden.',
    plans: [
      {
        name: 'Enskilt rådgivningstillfälle',
        price: 300,
        period: 'timme',
        badge: 'Första mötet gratis!',
        description:
          'Rådgivande samtal, från en utbildad företagsekonom, för att diskutera specifika ekonomiska frågor eller utmaningar.',
        features: [
          'Personlig rådgivning',
          'Analys av nuvarande ekonomiska situation',
          'Rekommendationer för förbättringar',
          'Debiteras sker per påbörjad timme'
        ]
      }
    ]
  }
]
