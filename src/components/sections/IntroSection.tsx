import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

interface IntroSectionProps {
  heading: string
  introText: string
  highlightedText?: string
}

const IntroSection: React.FC<IntroSectionProps> = ({
  heading,
  introText,
  highlightedText
}) => {
  return (
    <Box
      bg='blue.50'
      py={{ base: 12, md: 16, lg: 20 }}
      width='100vw'
      position='relative'
      left='50%'
      right='50%'
      marginLeft='-50vw'
      marginRight='-50vw'
    >
      <Container maxW='container.xl' px={{ base: 4, md: 6 }}>
        <VStack spacing={4} textAlign={{ base: 'left', md: 'center' }}>
          <Heading
            as='h1'
            size={{ base: 'xl', lg: '2xl' }}
            lineHeight='shorter'
          >
            {heading}
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            color='gray.600'
            maxW='3xl'
          >
            {introText}
          </Text>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight='bold'
            color='blue.600'
          >
            {highlightedText}
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default IntroSection
