import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import ServiceCard from '../components/ui/ServiceCard'
import { services_full } from '../data/services_full'

const Pricing = () => {
  return (
    <>
      <Meta
        title='Priser - Bokföring från 295 kr/mån | Billig Bokföring'
        description='Transparenta priser för bokföring, momsrapport, årsbokslut och deklaration. Löpande bokföring från 295 kr/mån. Inga dolda avgifter.'
        keywords='bokföring pris, bokföringskostnad, billig bokföring, redovisning pris, årsbokslut kostnad, momsrapport pris, deklaration kostnad'
        ogUrl='https://billigbokforing.se/pricing'
      />

      <Box as='main'>
        {/* Hero Section */}
        <Box bg='blue.50' py={16}>
          <Container maxW='container.xl'>
            <VStack spacing={4} textAlign='center'>
              <Heading as='h1' size='2xl'>
                Transparenta priser för professionell bokföring
              </Heading>
              <Text fontSize='xl' color='gray.600' maxW='3xl'>
                Inga dolda avgifter. Inga bindningstider. Välj det paket som
                passar ditt företag bäst.
              </Text>
              <Text fontSize='lg' fontWeight='bold' color='blue.600'>
                Löpande bokföring från 295 kr/månad
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* All Services with Pricing */}
        {services_full.map((service, index) => (
          <Box
            key={service.title}
            py={12}
            bg={index % 2 === 0 ? 'white' : 'gray.50'}
          >
            <Container maxW='container.xl'>
              <VStack spacing={6} mb={8}>
                <Heading as='h2' size='xl' textAlign='center'>
                  {service.title}
                </Heading>
                <Text
                  fontSize='lg'
                  color='gray.600'
                  textAlign='center'
                  maxW='3xl'
                >
                  {service.description}
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {service.plans.map((plan, planIndex) => (
                  <ServiceCard
                    key={planIndex}
                    name={plan.name}
                    {...('price' in plan ? { price: plan.price } : {})}
                    {...('period' in plan ? { period: plan.period } : {})}
                    {...('badge' in plan ? { badge: plan.badge } : {})}
                    description={plan.description}
                    {...('features' in plan ? { features: plan.features } : {})}
                    {...('revenue' in plan ? { revenue: plan.revenue } : {})}
                  />
                ))}
              </SimpleGrid>
            </Container>
          </Box>
        ))}

        {/* CTA Section */}
        <Box bg='blue.600' py={16} color='white'>
          <Container maxW='container.md' textAlign='center'>
            <VStack spacing={6}>
              <Heading as='h2' size='xl'>
                Redo att komma igång?
              </Heading>
              <Text fontSize='lg'>
                Beställ dina tjänster idag och få professionell bokföring till
                fast pris.
              </Text>
              <Button
                as={Link}
                to='/order'
                size='lg'
                colorScheme='whiteAlpha'
                variant='solid'
                bg='white'
                color='blue.600'
                _hover={{ bg: 'gray.100' }}
              >
                Beställ nu
              </Button>
            </VStack>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Pricing
