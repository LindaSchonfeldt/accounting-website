import { Box, Heading, Text } from '@chakra-ui/react'
import CustomAccordion from '../components/ui/CustomAccordion'
import { faqs } from '../data/faqs'

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
      <Box
        maxW={{ base: '100%', md: 'container.md', lg: 'container.lg' }}
        mx='auto'
        px={{ base: 4, md: 8 }}
        pb={16}
      >
        <CustomAccordion faqs={faqs} />

        <Text mt={8} fontSize='md' color='gray.600'>
          Har du fler frågor? Tveka inte att{' '}
          <a
            href='/kontakt'
            style={{ color: '#3182CE', textDecoration: 'underline' }}
          >
            kontakta oss
          </a>
          !
        </Text>
      </Box>
    </Box>
  )
}

export default FAQ
