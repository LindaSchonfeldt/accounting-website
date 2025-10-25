import { Box, Container, Heading, Text } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Box style={{ textAlign: 'center', marginTop: '50px' }}>
      <Container>
        <Heading as='h1' size='2xl' mb={4}>
          404 - Sidan hittades inte
        </Heading>
        <Text color='gray.600' mb={8}>
          Tyvärr kunde vi inte hitta sidan du letade efter.
        </Text>
      </Container>
    </Box>
  )
}

export default NotFound
