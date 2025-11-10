import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'
import { Mail, MapPin } from 'lucide-react'

import Meta from '../components/Meta'
import IntroSection from '../components/sections/IntroSection'
import ContactForm from '../components/ui/ContactForm'

const Contact = () => {
  return (
    <>
      <Meta
        title='Kontakta oss - Snabb support och rådgivning | Billig Bokföring'
        description='Har du frågor om bokföring, momsrapport eller årsbokslut? Kontakta Billig Bokföring för professionell rådgivning. Vi svarar inom 24 timmar.'
        keywords='kontakta bokföringsbyrå, bokföring support, redovisning frågor, bokföringshjälp'
        ogUrl='https://billigbokforing.se/kontakt'
      />

      <Box as='main' minH='100vh'>
        <IntroSection
          heading='Kontakta oss'
          introText=' Har du frågor om bokföring, priser eller våra tjänster? Vi
                hjälper dig gärna! Fyll i formuläret så återkommer vi inom 24
                timmar.'
        />

        {/* Contact Info & Form Section */}
        <Container maxW='container.xl' py={16}>
          <Box
            display='grid'
            gridTemplateColumns={{ base: '1fr', lg: '1fr 2fr' }}
            gap={12}
          >
            {/* Contact Information */}
            <VStack align='flex-start' spacing={8}>
              <Box>
                <Heading as='h2' size='lg' mb={4}>
                  Kontaktinformation
                </Heading>
                <Text color='gray.600' mb={6}>
                  Vi finns här för att hjälpa dig med alla dina
                  bokföringsfrågor.
                </Text>
              </Box>

              {/* Email */}
              <HStack align='flex-start' spacing={4}>
                <Icon as={Mail} boxSize={6} color='blue.600' mt={1} />
                <Box>
                  <Text fontWeight='bold' mb={1}>
                    E-post
                  </Text>
                  <Link
                    href='mailto:info@billigbokforing.se'
                    color='blue.600'
                    _hover={{ textDecoration: 'underline' }}
                  >
                    info@billigbokforing.se
                  </Link>
                </Box>
              </HStack>

              {/* Business Hours */}
              <HStack align='flex-start' spacing={4}>
                <Icon as={MapPin} boxSize={6} color='blue.600' mt={1} />
                <Box>
                  <Text fontWeight='bold' mb={1}>
                    Öppettider
                  </Text>
                  <Text color='gray.600'>
                    Måndag - Fredag: 09:00 - 17:00
                    <br />
                    Lördag - Söndag: Stängt
                  </Text>
                </Box>
              </HStack>

              {/* Response Time */}
              <Box
                bg='green.50'
                p={4}
                borderRadius='md'
                borderLeft='4px solid'
                borderColor='green.500'
              >
                <Text fontWeight='bold' color='green.700' mb={1}>
                  Snabb respons
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  Vi strävar efter att svara på alla förfrågningar inom 24
                  timmar under vardagar.
                </Text>
              </Box>
            </VStack>

            {/* Contact Form */}
            <Box>
              <Heading as='h2' size='lg' mb={6}>
                Skicka ett meddelande
              </Heading>
              <ContactForm />
            </Box>
          </Box>
        </Container>

        {/* FAQ Suggestion - Full Width */}
        <Box
          bg='gray.50'
          py={12}
          width='100vw'
          position='relative'
          left='50%'
          right='50%'
          marginLeft='-50vw'
          marginRight='-50vw'
        >
          <Container maxW='container.md' textAlign='center'>
            <Heading as='h2' size='lg' mb={4}>
              Har du kollat in våra vanliga frågor?
            </Heading>
            <Text color='gray.600' mb={6}>
              Där finns svar på de flesta frågor om våra tjänster och priser.
            </Text>
            <Link
              href='/#faq'
              color='blue.600'
              fontWeight='bold'
              fontSize='lg'
              _hover={{ textDecoration: 'underline' }}
            >
              Se vanliga frågor
            </Link>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Contact
