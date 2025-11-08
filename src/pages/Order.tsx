import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

import Meta from '../components/Meta'
import OrderForm from '../components/ui/OrderForm'

const Order = () => {
  return (
    <>
      <Meta
        title='Beställ | Billig Bokföring'
        description='Kom igång med våra bokföringstjänster idag.'
        keywords='bokföring, redovisning, småföretag, bokföringsbyrå, ekonomi'
        ogUrl='https://billigbokforing.se/order'
      />
      <Box as='main' minH='100vh' role='main'>
        {/* Hero Section - Full Width */}
        <Box
          bg='blue.50'
          py={20}
          width='100vw'
          position='relative'
          left='50%'
          right='50%'
          marginLeft='-50vw'
          marginRight='-50vw'
        >
          <Box maxW='xl' mx='auto'>
            <VStack
              spacing={4}
              textAlign={{ base: 'left', md: 'center' }}
              p={{ base: 4, md: 0 }}
            >
              <Heading as='h1' size={{ base: 'xl', md: '2xl' }}>
                Beställ bokföringstjänster
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color='gray.600' mt={4}>
                Välj de tjänster som passar företaget. Ett kostnadsförslag
                skickas inom 24 timmar. Ingen bindning gäller förrän förslaget
                godkänns. Flera tjänster i samma beställning kan ge kombirabatt.
              </Text>
            </VStack>
          </Box>
        </Box>

        {/* Order Form Section */}
        <OrderForm />
      </Box>
    </>
  )
}

export default Order
