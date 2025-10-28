import {
  Box,
  Link as ChakraLink,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import { scrollToTop } from '../../components/animations'

const Footer: React.FC = () => {
  return (
    <Box as='footer' bg='blue.800' color='white' py={10} mt={12}>
      <Container maxW='container.xl'>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          justify='space-between'
          align={{ base: 'center', md: 'flex-start' }}
          mb={8}
        >
          {/* Företagsinformation */}
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
              Din personliga och kostnadseffektiva redovisningskonsult
            </Text>
          </Stack>

          {/* Tjänster */}
          <Stack
            spacing={3}
            flex={1}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Heading as='h4' size='sm' mb={2}>
              Tjänster
            </Heading>
            <ChakraLink
              as={RouterLink}
              to='/tjanster'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
              onClick={scrollToTop}
            >
              Våra tjänster
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/priser'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
              onClick={scrollToTop}
            >
              Priser
            </ChakraLink>
          </Stack>

          {/* Om företaget */}
          <Stack
            spacing={3}
            flex={1}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Heading as='h4' size='sm' mb={2}>
              Företaget
            </Heading>
            <ChakraLink
              as={RouterLink}
              to='/om-oss'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
              onClick={scrollToTop}
            >
              Om oss
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/kontakt'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
              onClick={scrollToTop}
            >
              Kontakt
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/vanliga-fragor'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
              onClick={scrollToTop}
            >
              Vanliga frågor
            </ChakraLink>
          </Stack>

          {/* Kom igång */}
          <Stack
            spacing={3}
            flex={1}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Heading as='h4' size='sm' mb={2}>
              Kom igång
            </Heading>
            <ChakraLink
              as={RouterLink}
              to='/boka-mote'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
              onClick={scrollToTop}
            >
              Boka möte
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/offert'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
              onClick={scrollToTop}
            >
              Få kostnadsfri offert
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
              onClick={scrollToTop}
            >
              Integritetspolicy
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/cookies'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
              onClick={scrollToTop}
            >
              Cookies
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to='/villkor'
              fontSize='sm'
              _hover={{ color: 'blue.200' }}
              onClick={scrollToTop}
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
