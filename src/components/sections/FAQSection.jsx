import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import { selectedFaqs } from '../../data/faqs'
import CustomAccordion from '../ui/CustomAccordion'

const FAQSection = () => {
  return (
    <Box as='section' id='faq' py={16} bg='blue.800'>
      <Container maxW='container.md' textAlign='center'>
        <Heading as='h2' size='xl' color='white' mb={6}>
          Vanliga frågor
        </Heading>
        <Text fontSize='lg' color='gray.50' mb={8} maxW='2xl' mx='auto'>
          Här hittar du svar på de vanligaste frågorna om våra tjänster, priser
          och hur det funkar att komma igång.
        </Text>
        <CustomAccordion variant='light' faqs={selectedFaqs} />
        <Text fontSize='md' color='gray.50' mt={8} mb={4} maxW='2xl' mx='auto'>
          Fler funderingar? Vi har samlat alla frågor och svar på en sida – ta
          en titt där om du vill fördjupa dig.
          <br />
          <Button
            as={RouterLink}
            to='/vanliga-fragor'
            variant='link'
            colorScheme='white'
            mt={4}
          >
            Se alla vanliga frågor och svar
          </Button>
        </Text>
      </Container>
    </Box>
  )
}

export default FAQSection
