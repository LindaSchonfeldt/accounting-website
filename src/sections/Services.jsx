import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const services = [
  {
    title: 'Löpande bokföring',
    desc: 'Vi hanterar din bokföring noggrant och effektivt, så att du kan fokusera på din verksamhet.'
  },
  {
    title: 'Momsrapport',
    desc: 'Få expertråd för att optimera din skattesituation och säkerställa efterlevnad.'
  },
  {
    title: 'Årsbokslut/Årsredovisning',
    desc: 'Vi sköter hela löneprocessen, från beräkning till utbetalning.'
  },
  {
    title: 'Inkomstdeklaration (INK1/INK2)',
    desc: 'Vi hanterar din bokföring noggrant och effektivt, så att du kan fokusera på din verksamhet.'
  },
  {
    title: 'Faktureringstjänst',
    desc: 'Vi hanterar din bokföring noggrant och effektivt, så att du kan fokusera på din verksamhet.'
  }
]

const Services = () => (
  <Box as='section' id='services' py={16} bg='white'>
    <Container maxW='container.md'>
      <Heading
        as='h2'
        size='xl'
        textAlign='center'
        mb={8}
        bgGradient='linear(to-r, blue.600, pink.600)'
        bgClip='text'
      >
        Våra Tjänster
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {services.map((service) => (
          <Box
            key={service.title}
            p={6}
            borderWidth='1px'
            borderRadius='lg'
            _hover={{ boxShadow: 'lg' }}
            transition='box-shadow 0.2s'
          >
            <Heading as='h3' size='md' mb={4}>
              {service.title}
            </Heading>
            <Text color='gray.600'>{service.desc}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)

export default Services
