import { Box, Button, Container, Heading, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import CustomAccordion from '../components/ui/CustomAccordion'
import { selectedFaqs } from '../data/faqs'
import { scrollToTop } from '../utils/navigation'

const FAQSection = () => {
  return (
    <Box as='section' id='faq' py={16} bg='blue.50'>
      <Container maxW='container.md' textAlign='center'>
        <Heading as='h2' size='xl' mb={6} color='blue.600'>
          Vanliga frågor
        </Heading>
        <Text fontSize='lg' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Här finner ni svar på våra vanligaste frågor. Har ni ytterligare
          funderingar är ni alltid välkomna att
          <Link as={RouterLink} to='/kontakt' color='blue.600'>
            kontakta oss
          </Link>
          .
        </Text>
        <CustomAccordion faqs={selectedFaqs} />
        <Button
          as={RouterLink}
          to='/vanliga-fragor'
          variant='outline'
          colorScheme='blue'
          mt={4}
          onClick={scrollToTop}
        >
          Visa alla frågor
        </Button>
      </Container>
    </Box>
  )
}

export default FAQSection
