import {
  Badge,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'
import { fadeIn } from '../animations'

const services = [
  {
    title: 'Löpande bokföring',
    desc: 'Vi ser till att din bokföring alltid är uppdaterad och korrekt, så att du får full kontroll över företagets ekonomi.',
    price: { bas: 'fr. 495 kr/mån', plus: 'fr. 995 kr/mån' }
  },
  {
    title: 'Momsrapport',
    desc: 'Vi beräknar och rapporterar din moms i tid – tryggt, smidigt och helt enligt Skatteverkets regler.',
    price: { bas: '399 kr/rapport', plus: '699 kr/rapport' }
  },
  {
    title: 'Årsbokslut/Årsredovisning',
    desc: 'Vi sammanställer och analyserar årets siffror för att ge dig en tydlig överblick inför nästa steg i verksamheten.',
    price: { bas: '1200 kr', plus: '1900 kr' }
  },
  {
    title: 'Inkomstdeklaration (INK1/INK2)',
    desc: 'Vi upprättar och lämnar in din deklaration korrekt och i tid, oavsett om du driver enskild firma eller aktiebolag.',
    price: { bas: '800 kr', plus: '1300 kr' }
  },
  {
    title: 'Faktureringstjänst',
    desc: 'Vi hjälper dig skapa, skicka och följa upp fakturor – du slipper administrationen och får betalt snabbare.',
    price: {
      bas: '199 kr/mån (upp till 15 fakturor)',
      plus: '399 kr/mån (16-50 fakturor)'
    }
  },
  {
    title: 'Personlig rådgivning',
    desc: 'Få skräddarsydda råd och strategier för att optimera din företags ekonomi och planera för framtiden.',
    price: 'Enligt offert'
  }
]

const Services = () => (
  <Box as='section' id='services' py={16} bg='white'>
    <Container maxW='container.lg'>
      <Heading as='h2' size='xl' textAlign='center' mb={8} color='blue.600'>
        Våra tjänster
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
            {...fadeIn} // spread your animation props here
            p={4}
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

            {typeof service.price === 'object' ? (
              <Stack
                direction={{ base: 'row', md: 'column', lg: 'row' }}
                spacing={2}
                mt='auto'
              >
                <Badge colorScheme='blue' whiteSpace='normal'>
                  Bas: {service.price.bas}
                </Badge>
                <Badge colorScheme='green' whiteSpace='normal'>
                  Plus: {service.price.plus}
                </Badge>
              </Stack>
            ) : (
              <Text fontWeight='semibold' mt='auto'>
                {service.price}
              </Text>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
)

export default Services
