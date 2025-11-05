import { Box, Container, Heading, Text, Spinner } from '@chakra-ui/react'
import { lazy, Suspense } from 'react'

// Lazy load the ContactForm component
const ContactForm = lazy(() => import('../ui/ContactForm'))

const ContactSection = () => {
  return (
    <Box as='section' id='contact' py={16} bg='white'>
      <Container maxW='container.md' textAlign='center'>
        <Heading as='h2' size='xl' mb={4}>
          Kontakta oss
        </Heading>
        <Text fontSize='lg' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Om du har frågor eller vill beställa våra tjänster, tveka inte att
          höra av dig!
        </Text>
        <Suspense
          fallback={
            <Box textAlign='center' py={8}>
              <Spinner size='xl' color='blue.500' />
            </Box>
          }
        >
          <ContactForm showContactReason={false} />
        </Suspense>
      </Container>
    </Box>
  )
}

export default ContactSection
