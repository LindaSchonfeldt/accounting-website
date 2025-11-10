import {
  Box,
  Link as ChakraLink,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <Box as='footer' bg='bg-footer' color='text-footer' py={12}>
      <Container maxW='container.xl'>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          justify='space-between'
          align={{ base: 'center', md: 'flex-start' }}
          mb={8}
        >
          {/* Company information */}
          <Stack
            spacing={3}
            flex={1}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Heading as='h3' size='sm' mb={2} color='white'>
              Billig Bokföring
            </Heading>
            <Text
              fontSize='sm'
              maxW='250px'
              color='whiteAlpha.800'
              textAlign={{ base: 'center', md: 'left' }}
            >
              Rätt pris, från start till tillväxt.
            </Text>
          </Stack>

          {/* Services */}
          <Stack
            spacing={3}
            flex={1}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Heading as='h4' size='sm' mb={2} color='white'>
              Tjänster
            </Heading>
            <ChakraLink
              as={RouterLink}
              to='/tjanster'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Våra tjänster
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/priser'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Priser
            </ChakraLink>
          </Stack>

          {/* About */}
          <Stack
            spacing={3}
            flex={1}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Heading as='h4' size='sm' mb={2} color='white'>
              Företaget
            </Heading>
            <ChakraLink
              as={RouterLink}
              to='/om-oss'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Om mig
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/vanliga-fragor'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Vanliga frågor
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/kontakt'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Kontakt
            </ChakraLink>
          </Stack>

          {/* Get started */}
          <Stack
            spacing={3}
            flex={1}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Heading as='h4' size='sm' mb={2} color='white'>
              Kom igång
            </Heading>
            {/* <ChakraLink
              as={RouterLink}
              to='/boka-mote'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Boka möte
            </ChakraLink> */}
            <ChakraLink
              as={RouterLink}
              to='/bestall'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Beställ
            </ChakraLink>
          </Stack>
        </Stack>

        {/* Bottom section */}
        <Stack
          pt={6}
          borderTopWidth={1}
          borderColor='whiteAlpha.300'
          direction={{ base: 'column', md: 'row' }}
          justify='space-between'
          align='center'
          spacing={4}
        >
          <Text
            fontSize='sm'
            color='whiteAlpha.700'
            textAlign={{ base: 'center', md: 'left' }}
          >
            &copy; {new Date().getFullYear()} Billig Bokföring. Alla rättigheter
            förbehållna.
          </Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            align='center'
          >
            <ChakraLink
              as={RouterLink}
              to='/integritetspolicy'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Integritetspolicy
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/cookies'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Cookies
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/villkor'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
            >
              Användarvillkor
            </ChakraLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
