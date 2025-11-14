import { Box, Heading, Spinner, Text } from '@chakra-ui/react'
import { lazy, Suspense } from 'react'

// Lazy load the ContactForm component
const ContactForm = lazy(() => import('../ui/ContactForm'))

const ContactSection = () => {
  return (
    <Box as='section' py={16}>
      <Box textAlign='center'>
        <Heading as='h2' size='xl' mb={4}>
          Kontakta oss
        </Heading>
        <Text fontSize='lg' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Hittar du inte det du söker, eller vill du veta mer om våra tjänster?
          Fyll i formuläret nedan så återkommer vi inom 24 timmar.
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
      </Box>
    </Box>
  )
}

export default ContactSection
