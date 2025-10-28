import { Box, Container, Heading, Text } from '@chakra-ui/react'

import Meta from '../components/Meta'

const About: React.FC = () => {
  return (
    <>
      <Meta
        title='Om oss | Billig Bokföring'
        description='Lär känna Billig Bokföring och vår mission att erbjuda prisvärda bokföringstjänster.'
      />
      <Box as='main' minH='100vh' role='main'>
        <Container maxW='container.md' textAlign='center'>
          <Heading as='h2' size='xl' mb={6} color='blue.600'>
            Om oss
          </Heading>
          <Text fontSize='lg' color='gray.600' mb={8} maxW='2xl' mx='auto'>
            ...
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default About
