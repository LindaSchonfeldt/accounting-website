import { Accordion as ChakraAccordion, Box } from '@chakra-ui/react'

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
    <ChakraAccordion.Root collapsible>
      {faqs.map((faq, index) => (
        <ChakraAccordion.Item key={index} value={`item-${index}`}>
          <ChakraAccordion.ItemTrigger>
            <Box flex='1' textAlign='left' fontWeight='semibold'>
              {faq.question}
            </Box>
            <ChakraAccordion.ItemIndicator />
          </ChakraAccordion.ItemTrigger>
          <ChakraAccordion.ItemContent pb={4} textAlign='left' color='gray.600'>
            {faq.answer}
          </ChakraAccordion.ItemContent>
        </ChakraAccordion.Item>
      ))}
    </ChakraAccordion.Root>
  )
}

export default Accordion
