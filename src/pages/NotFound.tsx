import Meta from '../components/ui/Meta'
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Meta
        title='404 - Sidan hittades inte | Billig Bokföring'
        description='Sidan du letar efter finns inte.'
      />
      <Box textAlign='center' py={20}>
        <Heading size='2xl' mb={4}>
          404
        </Heading>
        <Text fontSize='xl' mb={8}>
          Sidan hittades inte
        </Text>
        <Button as={Link} to='/' colorScheme='blue'>
          Tillbaka till startsidan
        </Button>
      </Box>
    </>
  )
}

export default NotFound
