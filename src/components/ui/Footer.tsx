import { Box, Container, Text } from '@chakra-ui/react'

const Footer: React.FC = () => {
  return (
    <Box as='footer' bg='blue.600' color='white' py={6} mt={12}>
      <Container maxW='container.md' textAlign='center'>
        <Text>
          &copy; {new Date().getFullYear()} Your Brand. Alla rättigheter
          förbehållna.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
