import { Box, Heading } from '@chakra-ui/react'

import Meta from '../components/Meta'

const Services = () => {
  return (
    <>
      <Meta
        title='Tjänster - Billig Bokföring'
        description='Upptäck våra kostnadseffektiva bokföringstjänster för småföretag. Personlig service och fast pris.'
      />
      <Box>
        <Heading as='h1' size='xl' py={16} mb={8} textAlign='center'>
          Våra Tjänster
        </Heading>
        <Box as='section' maxW='container.md' mx='auto' px={4} pb={16}>
          {/* Service details would go here */}
        </Box>
      </Box>
    </>
  )
}

export default Services
