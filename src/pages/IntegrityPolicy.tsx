import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

import Meta from '../components/Meta'

const Integritetspolicy = () => {
  return (
    <>
      <Meta
        title='Integritetspolicy | Billig Bokföring'
        description='Läs om hur vi hanterar dina personuppgifter enligt GDPR.'
      />
      <Box as='main' minH='100vh' role='main' py={8}>
        <Container maxW='container.md'>
          <Heading as='h1' size='2xl' mb={8}>
            Integritetspolicy
          </Heading>
          <Stack spacing={6}>
            <Text>Uppdaterad: {new Date().toLocaleDateString('sv-SE')}</Text>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Introduktion
              </Heading>
              <Text>
                Billig Bokföring ("vi", "oss") värnar om din integritet och
                skyddar dina personuppgifter. Denna policy beskriver hur vi
                samlar in, använder och skyddar din information.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Vilka uppgifter samlar vi in?
              </Heading>
              <Text mb={2}>Vi samlar in följande information:</Text>
              <Text as='ul' pl={6}>
                <Text as='li'>Namn och kontaktuppgifter</Text>
                <Text as='li'>E-postadress</Text>
                <Text as='li'>Telefonnummer</Text>
                <Text as='li'>Företagsinformation</Text>
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Hur använder vi dina uppgifter?
              </Heading>
              <Text>
                Vi använder dina personuppgifter för att tillhandahålla våra
                tjänster, kommunicera med dig och förbättra vår service.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Dina rättigheter
              </Heading>
              <Text>
                Enligt GDPR har du rätt att begära tillgång till, rättelse eller
                radering av dina personuppgifter. Kontakta oss på
                info@billigbokforing.se
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Kontakt
              </Heading>
              <Text>
                För frågor om denna policy, kontakta oss på
                info@billigbokforing.se
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Integritetspolicy
