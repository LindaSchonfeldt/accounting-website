import { Box, Container, Heading, Link, Text } from '@chakra-ui/react'

import CustomAccordion from '../components/CustomAccordion'

const FAQ = () => {
  return (
    <Box as='section' id='faq' py={16} bg='white'>
      <Container maxW='container.md' textAlign='center'>
        <Heading as='h2' size='xl' mb={6} color='blue.600'>
          Vanliga Frågor
        </Heading>
        <Text fontSize='lg' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Här finner ni svar på våra vanligaste frågor. Har ni ytterligare
          funderingar är ni alltid välkomna att{' '}
          <Link href='#contact'>kontakta oss</Link>.
        </Text>
        <CustomAccordion />
      </Container>
    </Box>
  )
}

export default FAQ
