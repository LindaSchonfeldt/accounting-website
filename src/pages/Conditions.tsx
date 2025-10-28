// src/pages/Villkor.tsx
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

import Meta from '../components/Meta'

const Conditions = () => {
  return (
    <>
      <Meta
        title='Användarvillkor | Billig Bokföring'
        description='Läs våra användarvillkor för tjänsten.'
      />
      <Box py={16} minH='100vh'>
        <Container maxW='container.md'>
          <Heading as='h1' size='2xl' mb={8}>
            Användarvillkor
          </Heading>
          <Stack spacing={6}>
            <Text>Uppdaterad: {new Date().toLocaleDateString('sv-SE')}</Text>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Allmänt
              </Heading>
              <Text>
                Genom att använda Billig Bokförings tjänster godkänner du dessa
                användarvillkor.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Tjänster
              </Heading>
              <Text>
                Vi erbjuder redovisningstjänster enligt överenskommelse med
                kunden.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Betalning
              </Heading>
              <Text>
                Fakturering sker enligt avtalad prisplan. Betalning ska ske inom
                30 dagar.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Uppsägning
              </Heading>
              <Text>Tjänsten kan sägas upp med 30 dagars varsel.</Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Användning av webbplatsen
              </Heading>
              <Text mb={3}>
                Genom att besöka och använda denna webbplats godkänner du
                följande villkor. All information här är avsedd som allmän
                vägledning och ska inte ses som personlig rådgivning. För råd
                anpassade till din situation, kontakta oss direkt.
              </Text>
              <Text>
                Vi eftersträvar att informationen på sidan ska vara korrekt och
                uppdaterad, men vi kan inte garantera att inga fel förekommer.
                Vi tar inget ansvar för beslut som fattas baserat på innehållet
                på webbplatsen.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Immateriella rättigheter
              </Heading>
              <Text>
                Allt innehåll på webbplatsen, inklusive texter, bilder och
                logotyp, tillhör Billig Bokföring och får inte kopieras eller
                användas utan vårt skriftliga tillstånd.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Länkar till andra webbplatser
              </Heading>
              <Text>
                Om webbplatsen innehåller länkar till andra sidor ansvarar vi
                inte för innehållet eller hanteringen av personuppgifter på
                dessa externa webbplatser.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Ansvarsförhållanden
              </Heading>
              <Text mb={3}>
                Vi tar inget ansvar för direkta eller indirekta skador som kan
                uppstå vid användning av webbplatsen eller dess innehåll.
              </Text>
              <Text>
                För ekonomisk eller juridisk rådgivning gäller alltid det
                skriftliga uppdragsavtal som tecknas mellan oss och kund.
              </Text>
            </Box>

            <Box>
              <Heading as='h2' size='lg' mb={4}>
                Tillämplig lag
              </Heading>
              <Text>
                Svensk lag tillämpas på dessa villkor. Tvister avgörs av svensk
                domstol.
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Conditions
