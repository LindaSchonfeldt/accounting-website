import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const services = [
  {
    title: 'Löpande bokföring',
    desc: 'Vi ser till att din bokföring alltid är uppdaterad och korrekt, så att du får full kontroll över företagets ekonomi.'
  },
  {
    title: 'Momsrapport',
    desc: 'Vi beräknar och rapporterar din moms i tid – tryggt, smidigt och helt enligt Skatteverkets regler.'
  },
  {
    title: 'Årsbokslut/Årsredovisning',
    desc: 'Vi sammanställer och analyserar årets siffror för att ge dig en tydlig överblick inför nästa steg i verksamheten.'
  },
  {
    title: 'Inkomstdeklaration (INK1/INK2)',
    desc: 'Vi upprättar och lämnar in din deklaration korrekt och i tid, oavsett om du driver enskild firma eller aktiebolag.'
  },
  {
    title: 'Faktureringstjänst',
    desc: 'Vi hjälper dig skapa, skicka och följa upp fakturor – du slipper administrationen och får betalt snabbare.'
  }
]

const Services = () => (
  <Box as='section' id='services' py={16} bg='white'>
    <Container maxW='container.md'>
      <Heading as='h2' size='xl' textAlign='center' mb={8} color='blue.600'>
        Våra Tjänster
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {services.map((service) => (
          <Box
            key={service.title}
            p={6}
            borderWidth='1px'
            borderRadius='lg'
            boxShadow='md'
            _hover={{ boxShadow: 'lg' }}
            transition='box-shadow 0.2s'
            bg='gray.50'
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
