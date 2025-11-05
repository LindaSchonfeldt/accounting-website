export const services_full = [
  {
    icon: 'LibraryBig',
    title: 'Löpande bokföring',
    description:
      'Vi ser till att din bokföring alltid är uppdaterad och korrekt, så att du får full kontroll över företagets ekonomi.',
    plans: [
      {
        name: 'Mini',
        price: 300,
        period: 'månad',
        revenue: '0 – 10 000 kr',
        description:
          'För nystartade företag, hobbyverksamhet eller testprojekt utan löpande fakturering.',
        features: [
          'Registrering av upp till 50 verifikationer per månad',
          'Månadsavstämning av konton',
          'Grundläggande rapportering'
        ]
      },
      {
        name: 'Liten',
        price: 495,
        period: 'månad',
        revenue: '10 001 – 100 000 kr',
        description: 'För små firmor med några få transaktioner i månaden.',
        features: [
          'Upp till 100 verifikationer per månad',
          'Månadsavstämning och kontoanalys',
          'Kvartalsvis momsrapport',
          'E-postsupport'
        ]
      },
      {
        name: 'Mellan',
        price: 795,
        period: 'månad',
        revenue: '100 001 – 500 000 kr',
        description: 'För etablerade småföretag med regelbunden verksamhet.',
        features: [
          'Upp till 200 verifikationer per månad',
          'Månatlig momsrapport',
          'Löneunderlag och personaladministration',
          'Telefonsupport'
        ]
      },
      {
        name: 'Stor',
        price: 1195,
        period: 'månad',
        revenue: 'Över 500 000 kr',
        description:
          'För växande bolag som behöver mer löpande kontroll & rapporter.',
        features: [
          'Obegränsat antal verifikationer',
          'Veckovis ekonomisk rapportering',
          'Dedikerad bokföringskonsult',
          'Prioriterad support'
        ]
      }
    ]
  },
  {
    icon: 'Coins',
    title: 'Momsrapport',
    description:
      'Sammanställer och rapporterar din moms korrekt och i tid, oavsett om du behöver månads-, kvartals- eller årsrapportering.',
    plans: [
      {
        name: 'Månadsrapportering',
        period: 'ingår',
        description:
          'Momsrapportering varje månad för att hålla koll på kassaflödet.'
      },
      {
        name: 'Kvartalsrapportering',
        period: 'ingår',
        description:
          'Momsrapportering var tredje månad för företag med lägre omsättning.'
      },
      {
        name: 'Årsrapportering',
        period: 'ingår',
        description: 'Sammanställning och rapportering av moms en gång per år.'
      }
    ]
  },
  {
    icon: 'BarChart3',
    title: 'Årsbokslut/Årsredovisning',
    description:
      'Komplett bokslut och årsredovisning enligt gällande lagar och regler, inklusive analys och rådgivning.',
    plans: [
      {
        name: 'Årsbokslut för enskild firma',
        price: 2500,
        period: 'engång',
        description:
          'Fullständigt årsavslut inklusive resultat- och balansräkning.'
      },
      {
        name: 'Årsredovisning för aktiebolag',
        price: 4500,
        period: 'engång',
        description: 'Fullständig årsredovisning enligt aktiebolagslagen.'
      },
      {
        name: 'Analys och rådgivning',
        price: 1500,
        period: 'engång',
        description: 'Genomgång av resultatet med rekommendationer.'
      }
    ]
  },
  {
    icon: 'FileText',
    title: 'Inkomstdeklaration (INK1/INK2)',
    description:
      'Vi upprättar och lämnar in din deklaration korrekt och i tid, oavsett om du driver enskild firma eller aktiebolag.',
    services: [
      'Inkomstdeklaration för enskild firma (INK1): Fullständig deklaration inklusive alla bilagor.',
      'Inkomstdeklaration för aktiebolag (INK2): Korrekt upprättad deklaration enligt aktiebolagslagen.',
      'Rådgivning inför deklarationen: Hjälp med skatteplanering och optimering av avdrag.'
    ]
  },
  {
    icon: 'ReceiptText',
    title: 'Faktureringstjänst',
    description:
      'Vi hjälper dig skapa, skicka och följa upp fakturor – du slipper administrationen och får betalt snabbare.',
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
