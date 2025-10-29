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
      'Vi beräknar och rapporterar din moms i tid – tryggt, smidigt och helt enligt Skatteverkets regler.',
    services: [
      'Månadsrapportering: Momsrapportering varje månad för att hålla koll på kassaflödet.',
      'Kvartalsrapportering: Momsrapportering var tredje månad för företag med lägre omsättning.',
      'Årsrapportering: Sammanställning och rapportering av moms en gång per år.'
    ]
  } // ← Add comma here too
  // ...more services
]
