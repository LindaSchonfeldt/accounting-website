import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Hero = () => {
  return (
    <Box as='section' id='hero' py={16} textAlign='center'>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl' mb={6} color='blue.600'>
          Din personliga och kostnadseffektiva redovisningskonsult
        </Heading>
        <Text fontSize='xl' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Här kommer ditt största argument för att anlita dig stå.
        </Text>
        <Button
          as={RouterLink}
          to='/styling'
          colorScheme='blue'
          size='lg'
          px={8}
          py={6}
          fontSize='lg'
          mr={4}
          variant='outline'
        >
          Boka ett möte
        </Button>
        <Button
          as={RouterLink}
          to='/styling'
          colorScheme='blue'
          size='lg'
          px={8}
          py={6}
          fontSize='lg'
        >
          Få kostnadsfri offert
        </Button>
      </Container>
    </Box>
  )
}

export default Hero
