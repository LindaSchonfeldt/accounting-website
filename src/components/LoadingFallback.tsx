import { Box, Center, Spinner, Text } from '@chakra-ui/react'

const LoadingFallback = () => (
  <Box
    minH='100vh'
    display='flex'
    alignItems='center'
    justifyContent='center'
    bgGradient='linear(to-br, blue.50, gray.50)'
  >
    <Center flexDirection='column'>
      <Spinner size='xl' color='blue.600' thickness='4px' mb={4} />
      <Text color='gray.600'>Laddar...</Text>
    </Center>
  </Box>
)

export default LoadingFallback
