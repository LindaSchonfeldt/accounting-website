import { Box, Container, Heading, Text, Spinner } from '@chakra-ui/react'
import { lazy, Suspense } from 'react'

// Lazy load the ContactForm component
const ContactForm = lazy(() => import('../components/ui/ContactForm'))

const Contact = () => {
  return (
    <Box as='section' id='contact' py={16} bg='white'>
      <Container maxW='container.md' textAlign='center'>
        <Heading as='h2' size='xl' mb={4} color='blue.600'>
          Kontakta oss
        </Heading>
        <Text fontSize='lg' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          För beställning eller frågor om våra tjänster. Tveka inte att höra av
          dig!
        </Text>
        <Suspense
          fallback={
            <Box textAlign='center' py={8}>
              <Spinner size='xl' color='blue.500' />
            </Box>
          }
        >
          <ContactForm />
        </Suspense>
      </Container>
    </Box>
  )
}

export default Contact
