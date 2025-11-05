import { Box, Heading, Text } from '@chakra-ui/react'

import Meta from '../components/Meta'
import OrderForm from '../components/ui/OrderForm'

const Order = () => {
  return (
    <>
      <Meta
        title='Beställ | Billig Bokföring'
        description='Kom igång med våra bokföringstjänster idag.'
      />
      <Box
        as='main'
        minH='100vh'
        role='main'
        p={{ base: 0, md: 4 }}
        textAlign={{ base: 'left', md: 'center' }}
      >
        <Heading as='h1' size='xl' pt={8} ml={4} mb={4}>
          Beställ Bokföringstjänster
        </Heading>
        <Text textAlign='center' mb={4} color='gray.600'>
          Välj den/de tjänst(er) som passar ditt företag och kom igång idag.
        </Text>
        <OrderForm />
      </Box>
    </>
  )
}

export default Order
