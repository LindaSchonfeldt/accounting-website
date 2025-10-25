import { Box, Image, Text } from '@chakra-ui/react'

const Banner = () => {
  return (
    <Box
      bg='blue.600'
      color='white'
      py={2}
      textAlign='start'
      px={4}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexWrap='wrap'
      gap={2}
      p={6}
    >
      <Text color={'white'} fontSize='md' fontWeight='bold'>
        Byråpartner hos{' '}
      </Text>
      <Image src='/images/fortnox_logo.svg'></Image>
    </Box>
  )
}

export default Banner
