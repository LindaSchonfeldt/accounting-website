import { Box, Heading, Link, Text } from '@chakra-ui/react'

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
        p={{ base: 0, md: 4 }}
        textAlign={{ base: 'left', md: 'center' }}
      >
        <Heading as='h1' size='xl' pt={8} ml={4} mb={4}>
          Kontakta
        </Heading>
        <Text ml={4} mr={4} mb={6} color='gray.600'>
          Har du frågor eller vill komma i kontakt med oss? Fyll i formuläret
          nedan så återkommer vi så snart som möjligt.
          <br />
          <Link
            href='mailto:info@billigbokforing.se'
            color='blue.600'
            fontWeight='bold'
            userSelect='all'
          >
            info@billigbokforing.se
          </Link>
        </Text>
        <Box
          maxW={{ base: '100%', md: 'container.md' }}
          mx='auto'
          px={{ base: 4, md: 0 }}
        >
          <ContactForm />
        </Box>
      </Box>
    </>
  )
}

export default Contact
