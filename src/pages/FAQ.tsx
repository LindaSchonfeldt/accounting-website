import { Box, Heading } from '@chakra-ui/react'

const FAQ = () => {
  return (
    <Box
      as='main'
      minH='100vh'
      role='main'
      p={{ base: 0, md: 4 }}
      textAlign={{ base: 'left', md: 'center' }}
    >
      <Heading as='h1' size='xl' pt={8} ml={4} mb={4}>
        Vanliga frågor (FAQ)
      </Heading>
    </Box>
  )
}

export default FAQ
