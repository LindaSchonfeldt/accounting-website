import {
  Badge,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'

const services = [
  {
    title: 'Löpande bokföring',
    desc: 'Vi ser till att din bokföring alltid är uppdaterad och korrekt, så att du får full kontroll över företagets ekonomi.',
    price: { bas: 'fr. 495 kr/mån', plus: 'fr. 895 kr/mån' }
  },
  {
    title: 'Momsrapport',
    desc: 'Vi beräknar och rapporterar din moms i tid – tryggt, smidigt och helt enligt Skatteverkets regler.',
    price: { bas: 'fr. 295 kr/rapport', plus: 'fr. 495 kr/rapport' }
  },
  {
    title: 'Årsbokslut/Årsredovisning',
    desc: 'Vi sammanställer och analyserar årets siffror för att ge dig en tydlig överblick inför nästa steg i verksamheten.',
    price: { bas: 'fr. 2 495 kr', plus: 'fr. 3 995 kr' }
  },
  {
    title: 'Inkomstdeklaration (INK1/INK2)',
    desc: 'Vi upprättar och lämnar in din deklaration korrekt och i tid, oavsett om du driver enskild firma eller aktiebolag.',
    price: { bas: 'fr. 995 kr', plus: 'fr. 1 495 kr' }
  },
  {
    title: 'Faktureringstjänst',
    desc: 'Vi hjälper dig skapa, skicka och följa upp fakturor – du slipper administrationen och får betalt snabbare.',
    price: { bas: 'fr. 49 kr/faktura', plus: 'fr. 39 kr/faktura' }
  }
]

const Services = () => (
  <Box as='section' id='services' py={16} bg='white'>
    <Container maxW='container.lg'>
      <Heading as='h2' size='xl' textAlign='center' mb={8} color='blue.600'>
        Våra Tjänster
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={6}
        bg='white'
        overflow='visible'
      >
        {services.map((service) => (
          <Box
            key={service.title}
            p={6}
            m={2}
            borderWidth='1px'
            borderRadius='lg'
            boxShadow='md'
            _hover={{ boxShadow: 'lg' }}
            transition='box-shadow 0.2s'
            bg='gray.50'
            display='flex'
            flexDirection='column'
          >
            <Heading as='h3' size='md' mb={4}>
              {service.title}
            </Heading>
            <Text color='gray.600' mb={4} flex='1'>
              {service.desc}
            </Text>
            <Stack
              direction={{ base: 'row', md: 'column', lg: 'row' }}
              spacing={4}
              mt='auto'
            >
              <Badge colorScheme='blue'>Bas: {service.price.bas}</Badge>
              <Badge colorScheme='green'>Plus: {service.price.plus}</Badge>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)

export default Services
