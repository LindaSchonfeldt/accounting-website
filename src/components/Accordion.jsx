import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

const faqs = [
  {
    question: 'Vad kostar era tjänster?',
    answer:
      'Våra priser varierar beroende på dina behov. Kontakta oss för en kostnadsfri offert.'
  },
  {
    question: 'Hur snabbt kan ni börja?',
    answer: 'Vi kan oftast börja inom en vecka efter vårt första möte.'
  },
  {
    question: 'Vilka program använder ni?',
    answer:
      'Vi arbetar med de flesta bokföringsprogram och kan anpassa oss efter dina behov.'
  }
]

const Accordion = () => {
  return (
    <ChakraAccordion allowToggle>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <h3>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontWeight='semibold'>
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4} textAlign='left' color='gray.600'>
            {faq.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </ChakraAccordion>
  )
}

export default Accordion
