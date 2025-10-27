import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { base } from 'framer-motion/client'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <Box as='footer' bg='blue.800' color='text-tertiary' py={6} mt={12}>
      <Container
        maxW='container.md'
        textAlign={{ base: 'center', md: 'start' }}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Stack direction='column' spacing={4} mb={4}>
          <Heading as='h3' size='sm' color='white'>
            Juridisk information
          </Heading>
          <Link to='/integritetspolicy'>Integritetspolicy</Link>
          <Link to='/cookies'>Cookies</Link>
          <Link to='/villkor'>Villkor</Link>
        </Stack>
        <Stack direction='column' spacing={4} mb={4}>
          <Heading as='h3' size='sm' color='white'>
            Information
          </Heading>
          <Link to='/om-oss'>Om oss</Link>
          <Link to='/kontakt'>Kontakt</Link>
          <Link to='/vanliga-fragor'>Vanliga frågor</Link>
        </Stack>
        <Stack direction='column' spacing={4} mb={4}>
          <Heading as='h3' size='sm' color='white'>
            Tjänster
          </Heading>
          <Link to='/tjanster'>Bokföring</Link>
          <Link to='/priser'>Priser</Link>
          <Link to='/offert'>Offertförfrågan</Link>
          <Link to='/boka-mote'>Boka gratis möte</Link>
        </Stack>
        <Stack direction='row' spacing={4} justifyContent='center'></Stack>
      </Container>
      <Container maxW='container.md' textAlign='center'>
        <Text fontSize='md' mt={4} color='white'>
          &copy; {new Date().getFullYear()} Billig Bokföring. Alla rättigheter
          förbehållna.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
