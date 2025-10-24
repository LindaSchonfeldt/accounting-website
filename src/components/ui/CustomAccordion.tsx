import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/accordion'
import { Box } from '@chakra-ui/react'
import React from 'react'

export type FAQ = {
  question: string
  answer: string
}

interface AccordionProps {
  faqs?: FAQ[]
}

const defaultFaqs: FAQ[] = [
  {
    question: 'Vad ingår i löpande bokföring?',
    answer:
      'Vi registrerar dina verifikationer, stämmer av konton och ser till att allt är klart inför momsrapportering och bokslut.'
  },
  {
    question: 'Hur ofta behöver jag skicka in mitt underlag?',
    answer:
      'Det beror på hur ofta du har transaktioner. De flesta skickar in månadsvis, men vi anpassar oss efter ditt behov.'
  },
  {
    question: 'Kan jag byta paket om mitt företag växer?',
    answer:
      'Ja, du kan när som helst gå över från Standardpaketet till Premiumpaketet – vi justerar priset automatiskt.'
  },
  {
    question: 'Hur skickar jag in kvitton och fakturor?',
    answer:
      'Du kan ladda upp allt digitalt via mejl, Dropbox eller vårt system – vi hjälper dig att hitta det smidigaste sättet.'
  },
  {
    question: 'Hjälper ni nystartade företag?',
    answer:
      'Absolut. Vi stöttar många som precis har startat och kan även hjälpa till med registrering och val av bolagsform.'
  },
  {
    question: 'Vad händer om jag är sen med underlaget?',
    answer:
      'Ingen fara – vi påminner dig och hittar en lösning så rapporteringen ändå blir korrekt i tid.'
  },
  {
    question: 'Tar ni emot både enskild firma och aktiebolag?',
    answer:
      'Ja, vi arbetar med båda, och anpassar tjänsterna efter bolagsform och omfattning.'
  },
  {
    question: 'Kan ni ta hand om hela bokslutet och deklarationen också?',
    answer:
      'Ja, vi erbjuder årsbokslut, årsredovisning och inkomstdeklaration som tilläggstjänster eller som del av ett helhetsupplägg.'
  },
  {
    question: 'Binder jag mig till något avtal?',
    answer:
      'Nej, våra tjänster löper månadsvis utan bindningstid – du kan säga upp eller pausa när du vill.'
  }
]

const CustomAccordion: React.FC<AccordionProps> = ({ faqs = defaultFaqs }) => {
  return (
    <Accordion allowMultiple>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={`faq-${index}`}
          borderWidth='1px'
          borderRadius='md'
          mb={2}
        >
          <h2>
            <AccordionButton
              py={{ base: 3, md: 4 }}
              px={{ base: 4, md: 6 }}
              aria-controls={`faq-panel-${index}`}
            >
              <Box flex='1' textAlign='left' fontWeight='semibold'>
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            id={`faq-panel-${index}`}
            pb={4}
            px={{ base: 4, md: 6 }}
            textAlign='left'
            color='gray.600'
          >
            {faq.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default CustomAccordion
