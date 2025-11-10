import { Box, Container, Heading, Text } from '@chakra-ui/react'

import Meta from '../components/Meta'

const About: React.FC = () => {
  return (
    <>
      <Meta
        title='Om oss | Billig Bokföring'
        description='Lär känna Billig Bokföring och vår mission att erbjuda prisvärda bokföringstjänster.'
        keywords='om oss, billig bokföring, bokföringstjänster, redovisningsbyrå'
        ogUrl='https://billigbokforing.se/om-oss'
      />
      <Box as='main' minH='100vh' role='main' p={{ base: 0, md: 4 }}>
        <Container maxW='container.md' textAlign='center'>
          <Heading as='h1' size='xl' pt={8} ml={2} mb={4}>
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
