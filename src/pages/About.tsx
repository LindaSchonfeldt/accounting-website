import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

import richardImgDesktop from '../assets/richard-desktop-424.webp'
import richardImgMobile from '../assets/richard-mobile-240.webp'
import PageSection from '../components/layout/PageSection'
import PageWrapper from '../components/layout/PageWrapper'
import Meta from '../components/Meta'

const About: React.FC = () => {
  return (
    <>
      <Meta
        title='Om oss | Billig Bokföring'
        description='Lär känna Richard Heijdenberg och Billig Bokföring - din partner för enkel och prisvärd bokföring.'
        keywords='om oss, billig bokföring, bokföringstjänster, redovisningsbyrå'
        ogUrl='https://billigbokforing.se/om-oss'
      />
      <PageWrapper>
        <PageSection>
          <VStack spacing={12} align='center'>
            {/* Header */}
            <VStack spacing={2} align='center'>
              <Heading as='h1' size='2xl'>
                Om oss
              </Heading>
            </VStack>

            {/* Main Content */}
            <HStack
              spacing={8}
              align='flex-start'
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
            >
              {/* Image */}
              <VStack
                spacing={0}
                flex={{ base: '1', md: '0.4' }}
                minW={{ base: '100%', md: '200px' }}
              >
                <Image
                  src={richardImgDesktop}
                  srcSet={`${richardImgMobile} 240w, ${richardImgDesktop} 240w`}
                  sizes='(max-width: 768px) 240px, 240px'
                  alt='Richard Heijdenberg'
                  borderRadius='lg'
                  boxShadow='lg'
                  width='240px'
                  height={{ base: '320px', md: '424px' }}
                  objectFit='cover'
                  loading='lazy'
                />
                {/* Organisation info - desktop */}
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  textAlign='center'
                  mt={4}
                  spacing={1}
                  bg='gray.100'
                  p={2}
                  borderRadius='md'
                >
                  <Heading as='h2' size='sm' mt={4} mb={4} color='blue.800'>
                    Företagsinformation
                  </Heading>
                  <Text fontSize='sm' lineHeight='1.1'>
                    Org.nr: 1992{'\u200B'}0923-XXXX
                  </Text>
                  <Text fontSize='sm' lineHeight='1.1'>
                    Adress: Armfeltsgatan 1, 11534 Stockholm
                  </Text>
                </VStack>
              </VStack>

              {/* Text Content */}
              <VStack
                spacing={4}
                flex={1}
                align={{ base: 'center', md: 'start' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                <Box textAlign={{ base: 'center', md: 'left' }}>
                  <Heading as='h2' size='lg' mb={2} color='blue.800'>
                    Richard Heijdenberg
                  </Heading>
                  <Text fontSize='md' color='blue.600' fontWeight='600' mb={4}>
                    Auktoriserad Redovisningskonsult
                  </Text>
                </Box>

                <Text fontSize='md' lineHeight='1.8'>
                  Med en kandidatexamen i företagsekonomi med inriktning
                  redovisning har jag byggt en passion för att hjälpa små och
                  medelstora företag att få ordning på sin ekonomi.
                </Text>

                <Text fontSize='md' lineHeight='1.8'>
                  Jag tror att bra bokföring inte behöver vara komplicerad eller
                  dyr. Min mission är att göra redovisning enkelt, tillgängligt
                  och prisvärt för dig och ditt företag.
                </Text>

                {/* Key Points */}
                <VStack spacing={2} align='start' w='100%' pt={2}>
                  <HStack spacing={3}>
                    <CheckCircleIcon color='blue.600' />
                    <Text fontSize='sm' color='blue.900'>
                      Personlig och tillgänglig service
                    </Text>
                  </HStack>
                  <HStack spacing={3}>
                    <CheckCircleIcon color='blue.600' />
                    <Text fontSize='sm' color='blue.900'>
                      Fokus på ditt företags behov
                    </Text>
                  </HStack>
                  <HStack spacing={3}>
                    <CheckCircleIcon color='blue.600' />
                    <Text fontSize='sm' color='blue.900'>
                      Transparent prissättning
                    </Text>
                  </HStack>
                </VStack>

                <Text
                  fontSize='md'
                  fontStyle='italic'
                  pt={4}
                  pb={4}
                  borderLeft='4px'
                  borderColor='blue.600'
                  pl={4}
                >
                  "Jag ser fram emot att bli din sparringpartner i ekonomiska
                  frågor och hjälpa dig fokusera på det du gör bäst – att driva
                  ditt företag!"
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Organisation info - mobile */}
          <VStack
            display={{ base: 'flex', md: 'none' }}
            textAlign='center'
            mt={8}
            spacing={1}
            bg='gray.100'
            py={4}
            borderRadius='md'
          >
            <Heading as='h2' size='sm' mt={4} mb={4} color='blue.800'>
              Företagsinformation
            </Heading>
            <Text fontSize='sm' lineHeight='1.2'>
              Org.nr: 1992{'\u200B'}0923-XXXX
            </Text>
            <Text fontSize='sm' lineHeight='1.2'>
              Adress: Armfeltsgatan 1, 11534 Stockholm
            </Text>
          </VStack>
        </PageSection>
      </PageWrapper>
    </>
  )
}

export default About
