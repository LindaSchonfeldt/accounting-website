import { Box, Heading, Text } from '@chakra-ui/react'

import Meta from '../components/Meta'
import ContactForm from '../components/ui/ContactForm'

const Contact = () => {
  return (
    <>
      <Meta
        title='Kontakt | Billig Bokföring'
        description='Kontakta Billig Bokföring för prisvärda bokföringstjänster och support.'
      />
      <Box
        as='main'
        minH='100vh'
        role='main'
        p={{ base: 2, md: 4 }}
        textAlign={{ base: 'left', md: 'center' }}
      >
        <Heading as='h1' size='xl' pt={8} ml={2} mb={4}>
          Kontakta Oss
        </Heading>
        <Text mb={6} color='gray.600'>
          Har du frågor eller vill komma i kontakt med oss? Fyll i formuläret
          nedan så återkommer vi så snart som möjligt.
        </Text>
        <ContactForm />
      </Box>
    </>
  )
}

export default Contact
