import { Box, Button, Container, Heading, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import CustomAccordion from '../components/ui/CustomAccordion'
import { selectedFaqs } from '../data/faqs'
import { scrollToTop } from '../utils/navigation'

const FAQSection = () => {
  return (
    <Box
      as='section'
      id='faq'
      py={16}
      bgGradient='linear(to-l, white, blue.50)'
    >
      <Container maxW='container.md' textAlign='center'>
        <Heading as='h2' size='xl' mb={6} color='blue.600'>
          Vanliga frågor
        </Heading>
        <Text fontSize='lg' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Här hittar du svar på de vanligaste frågorna vi får. Vill du veta mer
          eller saknar du något svar? Du är alltid välkommen att{' '}
          <Link as={RouterLink} to='/kontakt' color='blue.600'>
            kontakta oss
          </Link>
          .
        </Text>
        <CustomAccordion faqs={selectedFaqs} />
        <Text fontSize='md' color='gray.800' mt={8} mb={4} maxW='2xl' mx='auto'>
          Fler funderingar? Vi har samlat alla frågor och svar på en sida – ta
          en titt där om du vill fördjupa dig.
        </Text>
        <Button
          as={RouterLink}
          to='/vanliga-fragor'
          variant='outline'
          colorScheme='blue'
          mt={4}
          onClick={scrollToTop}
        >
          Se alla vanliga frågor och svar
        </Button>
      </Container>
    </Box>
  )
}

export default FAQSection
