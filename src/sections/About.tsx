import { Box, Container, Heading, Text } from '@chakra-ui/react'

const About: React.FC = () => {
  return (
    <Box p={8} bg='gray.50' borderRadius='md' boxShadow='md'>
      <Container maxW='container.md' textAlign='center'>
        <Heading as='h2' size='xl' mb={6} color='blue.600'>
          Om oss
        </Heading>
        <Text fontSize='lg' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Jag heter Richard.
        </Text>
      </Container>
    </Box>
  )
}

export default About
