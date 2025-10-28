import Meta from '../components/Meta'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

const Cookies = () => {
  return (
    <>
      <Meta
        title='Cookie-policy | Billig Bokföring'
        description='Information om hur vi använder cookies på vår webbplats.'
      />
      <Box py={16} minH='100vh'>
        <Container maxW='container.md'>
          <Heading as='h1' size='2xl' mb={8}>
            Cookie-policy
          </Heading>
          <Stack spacing={6}>
            <Text>Uppdaterad: {new Date().toLocaleDateString('sv-SE')}</Text>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Vad är cookies?
              </Heading>
              <Text>
                Cookies är små textfiler som lagras på din enhet när du besöker
                vår webbplats.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Vilka cookies använder vi?
              </Heading>
              <Text mb={2}>Vi använder:</Text>
              <Text as='ul' pl={6}>
                <Text as='li'>
                  Nödvändiga cookies - för webbplatsens funktion
                </Text>
                <Text as='li'>
                  Analyscookies - för att förstå hur besökare använder sidan
                </Text>
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Hur kan du hantera cookies?
              </Heading>
              <Text>
                Du kan när som helst ändra dina cookie-inställningar i din
                webbläsare.
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Cookies
