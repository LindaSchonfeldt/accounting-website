import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/accordion'
import { Box } from '@chakra-ui/react'
import React from 'react'

import { faqs as defaultFaqs } from '../../data/faqs'

export type FAQ = {
  question: string
  answer: string
}

interface AccordionProps {
  faqs?: FAQ[]
}

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
            color='gray.800'
          >
            {faq.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default CustomAccordion
