import { Box, Heading, Text } from '@chakra-ui/react'

import IntroSection from '../components/sections/IntroSection'
import CustomAccordion from '../components/ui/CustomAccordion'
import { faqs } from '../data/faqs'

const FAQ = () => {
  return (
    <Box as='main' minH='100vh' role='main'>
      <IntroSection
        heading='Vanliga frågor'
        introText='Här hittar du svar på de vanligaste frågorna om våra bokföringstjänster, priser och processer.'
      />
      <Box
        maxW='container.xl'
        mx='auto'
        textAlign='left'
        m={{ base: 4, md: 8, lg: 16 }}
      >
        <CustomAccordion faqs={faqs} />

        <Text mt={8} fontSize='md' color='gray.600' textAlign='center'>
          Har du fler frågor? Tveka inte att{' '}
          <a
            href='/kontakt'
            style={{ color: '#3182CE', textDecoration: 'underline' }}
          >
            kontakta oss
          </a>
          !
        </Text>
      </Box>
    </Box>
  )
}

export default FAQ
