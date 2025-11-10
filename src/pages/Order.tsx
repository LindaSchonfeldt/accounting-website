import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

import Meta from '../components/Meta'
import OrderForm from '../components/ui/OrderForm'

const Order = () => {
  return (
    <>
      <Meta
        title='Beställ tjänster - Billig Bokföring'
        description='Beställ bokföring, momsrapport eller årsbokslut. Enkel beställningsprocess med transparenta priser.'
        keywords='beställa bokföring, bokföring online, redovisningstjänster, momsrapport, årsbokslut'
        ogUrl='https://billigbokforing.se/order'
      />

      <Box as='main' minH='100vh'>
        <Box
          bg='blue.50'
          py={{ base: 12, md: 16, lg: 20 }}
          width='100vw'
          position='relative'
          left='50%'
          right='50%'
          marginLeft='-50vw'
          marginRight='-50vw'
        >
          <Container maxW='container.xl' px={{ base: 4, md: 6 }}>
            <VStack spacing={4} textAlign={{ base: 'left', md: 'center' }}>
              <Heading
                as='h1'
                size={{ base: 'xl', lg: '2xl' }}
                lineHeight='shorter'
              >
                Beställ bokföringstjänster
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                color='gray.600'
                maxW='3xl'
              >
                Välj de tjänster som passar företaget. Ett kostnadsförslag
                skickas inom 24 timmar. Ingen bindning gäller förrän förslaget
                godkänns.
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight='bold'
                color='blue.600'
              >
                Vid beställning av flera tjänster ges rabatt.
              </Text>
            </VStack>
          </Container>
        </Box>

        <Container
          maxW='container.md'
          py={{ base: 8, md: 12, lg: 16 }}
          px={{ base: 4, md: 6 }}
        >
          <OrderForm />
        </Container>
      </Box>
    </>
  )
}

export default Order
