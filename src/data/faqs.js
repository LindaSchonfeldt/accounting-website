export const faqs = [
  {
    question: 'Vad ingår i löpande bokföring?',
    answer:
      'Verifikationer registreras, konton stäms av och allt förbereds inför momsrapportering och bokslut.'
  },
  {
    question: 'Kan paketet bytas om företaget växer?',
    answer:
      'Ja, det går när som helst att uppgradera till ett större paket. Prisjustering sker automatiskt.'
  },
  {
    question: 'Hur skickas kvitton och fakturor in?',
    answer:
      'Underlaget kan laddas upp digitalt via e-post, Dropbox eller direkt i systemet. Det går att välja det alternativ som passar bäst.'
  },
  {
    question: 'Erbjuds stöd till nystartade företag?',
    answer:
      'Ja, tjänsterna lämpar sig även för nystartade verksamheter. Hjälp kan ges med registrering och val av bolagsform.'
  },
  {
    question: 'Vad händer om underlaget skickas in för sent?',
    answer:
      'Påminnelse skickas ut och rapporteringen anpassas för att säkerställa att allt lämnas in korrekt och i tid.'
  },
  {
    question: 'Gäller tjänsterna både enskild firma och aktiebolag?',
    answer:
      'Ja, tjänsterna är anpassade för både enskild firma och aktiebolag oavsett omfattning.'
  },
  {
    question: 'Finns någon bindningstid?',
    answer:
      'Tjänsterna löper månadsvis med 30 dagars uppsägningstid och kan pausas eller avslutas när som helst.'
  }
]

export const selectedFaqs = faqs.filter(
  (faq, index) => [1, 5, 7].includes(index) // Select questions at these positions
)
