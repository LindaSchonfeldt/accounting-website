import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import Banner from '../components/ui/Banner'

const Hero = () => {
  return (
    <Box
      as='section'
      position='relative'
      minH={{ base: 'calc(100vh - 60px)', md: 'calc(100vh - 80px)' }}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
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

      {/* Main content */}
      <Container
        position='relative'
        zIndex={1}
        flex='1'
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Heading
          as='h1'
          fontSize={{ base: '3xl', md: '5xl' }}
          textAlign={'center'}
          lineHeight={{ base: '1.1', md: '1.1' }}
          mb={6}
        >
          Rätt pris, från start till tillväxt
        </Heading>
        <Text fontSize='xl' textAlign={'center'} mb={8} maxW='2xl' mx='auto'>
          Du betalar bara för det du behöver, baserat på ditt företags
          omsättning. Enkelt och pålitligt.
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
            to='/'
            colorScheme='blue'
            size='lg'
            px={8}
            py={{ base: 4, md: 6 }}
            fontSize='lg'
            variant='outline'
          >
            Boka ett möte
          </Button>
          <Button
            as={RouterLink}
            to='/'
            colorScheme='blue'
            size='lg'
            px={8}
            py={{ base: 4, md: 6 }}
            fontSize='lg'
          >
            Få kostnadsfri offert
          </Button>
        </Stack>
      </Container>

      {/* Banner at bottom - full width, outside Container */}
      <Box position='relative' zIndex={1} w='100%'>
        <Banner />
      </Box>
    </Box>
  )
}

export default Hero
