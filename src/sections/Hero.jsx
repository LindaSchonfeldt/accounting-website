import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Image
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Hero = () => {
  return (
    <Box
      as='section'
      position='relative'
      minH={{ base: 'calc(100vh - 60px)', md: 'calc(100vh - 80px)' }}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      bgGradient='linear(to-r, blue.50, blue.200)'
      bgSize='cover'
      bgPosition='center'
      bgRepeat='no-repeat'
    >
      <Image
        src='/images/pexels-pixabay-209224.jpg'
        typeof='image/webp'
        position='absolute'
        top={0}
        left={0}
        w='100%'
        h='100%'
        objectFit='cover'
        zIndex={0}
        filter='blur(2px)'
        opacity={0.3}
      />
      <Container position='relative' zIndex={1}>
        <Heading
          as='h1'
          fontSize={{ base: '3xl', md: '5xl' }}
          lineHeight={{ base: '1.1', md: '1.1' }} // or use "short"
          mb={6}
        >
          Din personliga och kostnadseffektiva redovisningskonsult
        </Heading>
        <Text fontSize='xl' mb={8} maxW='2xl' mx='auto'>
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
