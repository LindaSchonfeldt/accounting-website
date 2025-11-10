import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React from 'react'

import { faqs as defaultFaqs } from '../../data/faqs'

export type FAQ = {
  question: string
  answer: string
}

interface AccordionProps {
  faqs?: FAQ[]
  variant?: 'light' | 'dark'
}

const CustomAccordion: React.FC<AccordionProps> = ({ 
  faqs = defaultFaqs,
  variant = 'light'
}) => {
  const isDark = variant === 'dark'

  const bgColor = isDark ? 'gray.800' : 'white'
  const borderColor = isDark ? 'gray.600' : 'gray.200'
  const textColor = isDark ? 'white' : 'gray.800'
  const hoverBg = isDark ? 'gray.700' : 'gray.50'

  return (
    <Accordion allowMultiple>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={`faq-${index}`}
          borderWidth='1px'
          borderColor={borderColor}
          borderRadius='md'
          mb={2}
          bg={bgColor}
        >
          <h2>
            <AccordionButton
              py={{ base: 3, md: 4 }}
              px={{ base: 4, md: 6 }}
              aria-controls={`faq-panel-${index}`}
              _hover={{ bg: hoverBg }}
            >
              <Box 
                flex='1' 
                textAlign='left' 
                fontWeight='semibold'
                color={textColor}
              >
                {faq.question}
              </Box>
              <AccordionIcon color={textColor} />
            </AccordionButton>
          </h2>
          <AccordionPanel
            id={`faq-panel-${index}`}
            pb={4}
            px={{ base: 4, md: 6 }}
            textAlign='left'
            color={textColor}
          >
            {faq.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default CustomAccordion
