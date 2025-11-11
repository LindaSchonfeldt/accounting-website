import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface CTASectionProps {
  heading: string
  text: string
  buttonText: string
  buttonLink: string
  bgColor?: string
}

const CTASection: React.FC<CTASectionProps> = ({
  heading,
  text,
  buttonText,
  buttonLink,
  bgColor = 'blue.800'
}) => (
  <Box
    bg={bgColor}
    py={16}
    color='white'
    width='100vw'
    position='relative'
    left='50%'
    right='50%'
    marginLeft='-50vw'
    marginRight='-50vw'
  >
    <Container maxW='container.md' textAlign='center'>
      <VStack spacing={6}>
        <Heading as='h2' size='xl' color='whiteAlpha.900' mb={1}>
          {heading}
        </Heading>
        <Text fontSize='lg' color='whiteAlpha.900'>
          {text}
        </Text>
        <Button
          as={Link}
          to={buttonLink}
          size='lg'
          colorScheme='whiteAlpha'
          variant='solid'
          bg='white'
          color='blue.600'
          _hover={{ bg: 'gray.100' }}
        >
          {buttonText}
        </Button>
      </VStack>
    </Container>
  </Box>
)

export default CTASection
