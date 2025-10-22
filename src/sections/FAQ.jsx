import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Accordion from '../components/Accordion'

const FAQ = () => {
  return (
    <Box as='section' id='faq' py={16} bg='white'>
      <Container maxW='container.md' textAlign='center'>
        <Heading as='h2' size='xl' mb={6} color='blue.600'>
          Vanliga Frågor
        </Heading>
        <Text fontSize='xl' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Här besvarar vi några av de vanligaste frågorna våra kunder har.
        </Text>
        <Accordion />
      </Container>
    </Box>
  )
}

export default FAQ
