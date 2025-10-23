import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Hero = () => {
  return (
    <Box as='section' id='hero' py={16} textAlign='center'>
      <Container maxW='container.lg'>
        <Heading
          as='h1'
          fontSize={{ base: '3xl', md: '5xl' }}
          lineHeight={{ base: '1.1', md: '1.1' }} // or use "short"
          mb={6}
          color='blue.600'
        >
          Din personliga och kostnadseffektiva redovisningskonsult
        </Heading>
        <Text fontSize='xl' color='gray.600' mb={8} maxW='2xl' mx='auto'>
          Här kommer ditt största argument för att anlita dig stå.
        </Text>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify='center'
          align='center'
          mb={8}
        >
          <Button
            as={RouterLink}
            to='/styling'
            colorScheme='blue'
            size='lg'
            px={8}
            py={{ base: 4, md: 6 }} // Responsive vertical padding
            fontSize='lg'
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
            py={{ base: 4, md: 6 }} // Responsive vertical padding
            fontSize='lg'
          >
            Få kostnadsfri offert
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
