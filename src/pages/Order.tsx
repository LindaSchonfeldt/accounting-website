import { Box, Heading, Text } from '@chakra-ui/react'

import Meta from '../components/Meta'

const Order = () => {
  return (
    <>
      <Meta
        title='Beställ | Billig Bokföring'
        description='Kom igång med våra bokföringstjänster idag.'
      />
      <Box as='main' minH='100vh' p={{ base: 4, md: 8 }}>
        <Heading as='h1' size='2xl' mb={8} textAlign='center' pt={8}>
          Kom igång med Billig Bokföring
        </Heading>
        <Text textAlign='center' mb={4} color='gray.600'>
          Välj den/de tjänst(er) som passar ditt företag och kom igång idag.
        </Text>
        {/* Add service selection/order form here */}
      </Box>
    </>
  )
}

export default Order
