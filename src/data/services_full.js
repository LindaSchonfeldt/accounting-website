export const services_full = [
  {
    icon: 'LibraryBig',
    title: 'Löpande bokföring',
    description:
      'Jag ser till att din bokföring alltid är uppdaterad och korrekt, så att du får full kontroll över företagets ekonomi.',
    plans: [
      {
        name: 'Mini',
        price: 295,
        period: 'månad',
        revenue: '0 – 10 000 kr',
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
        revenue: '10 001 – 100 000 kr',
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
        revenue: '100 001 – 500 000 kr',
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
      'Sammanställer och redovisar er momsrapport till Skatteverket korrekt och i tid – oavsett om den gäller månatlig, kvartalsvis eller årlig rapportering.',
    plans: [
      {
        name: 'Månadsrapportering',
        price: 399,
        period: 'per tillfälle',
        description:
          'För företag som har månadsvis momsrapportering och vill vara säker på att allt skickas in korrekt och i tid varje månad.'
      },
      {
        name: 'Kvartalsrapportering',
        price: 399,
        period: 'per tillfälle',
        description:
          'För företag som har kvartalsvis momsrapportering och vill vara trygg med att allt redovisas korrekt och i tid varje kvartal.'
      },
      {
        name: 'Årsrapportering',
        price: 399,
        period: 'per tillfälle',
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
        period: 'per år',
        description:
          'Fullständig årsredovisning med resultat- och balansräkning, inklusive inskick till Bolagsverket.'
      },
      {
        name: 'NE-bilaga för enskild firma',
        price: 900,
        period: 'per år',
        description:
          'Utfyllnad av NE-bilagan inklusive inlämning till Skatteverket.'
      }
    ]
  },
  {
    icon: 'FileText',
    title: 'Inkomstdeklaration',
    description:
      'Vi upprättar och lämnar in din deklaration korrekt och i tid, för enskild firma eller aktiebolag.',
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
          'Korrekt upprättad inkomstdeklaration för aktiebolag enligt aktiebolagslagen med alla erforderliga bilagor.',
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
      'Vi hjälper dig skapa, skicka och följa upp fakturor – du slipper administrationen och får betalt snabbare.',
    plans: [],
    services: [
      'Skapande av fakturor: Professionellt utformade fakturor enligt dina önskemål.',
      'Utskick av fakturor: Vi skickar fakturorna åt dig via e-post eller post.',
      'Påminnelser och uppföljning: Vi skickar påminnelser till kunder med obetalda fakturor.'
    ]
  },
  {
    icon: 'Handshake',
    title: 'Personlig rådgivning',
    description:
      'Få skräddarsydda råd och strategier för att optimera din företags ekonomi och planera för framtiden.',
    services: [
      'Ekonomisk planering: Hjälp med budgetering och finansiell strategi.',
      'Skatterådgivning: Optimering av skattesituation och avdrag.',
      'Tillväxtstrategier: Råd för att expandera och utveckla din verksamhet.'
    ]
  }
]
