import { Box, Container, Heading, Text } from '@chakra-ui/react'

import ContactForm from '../components/ui/ContactForm'

const Contact = () => {
  return (
    <Box as='section' id='contact' py={16} bg='white'>
      <Container maxW='container.md' textAlign='center'>
        <Heading as='h2' size='xl' mb={6} color='blue.600'>
          Kontakta oss
        </Heading>
        <Text fontSize='lg' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Har du frågor eller vill du veta mer om våra tjänster? Tveka inte att
          höra av dig!
        </Text>
        <ContactForm />
      </Container>
    </Box>
  )
}

export default Contact
