import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Text
} from '@chakra-ui/react'
import { CloudCheck, ConciergeBell, LockKeyhole } from 'lucide-react'

const WhyUsSection = () => {
  return (
    <Box as='section' pb={16} bg='white'>
      <Container maxW='100vw' px={0}>
        <Heading as='h2' size='xl' textAlign='center' mb={8}>
          Varför välja oss?
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align='stretch'
          spacing={6}
        >
          <Card flex='1' border='none' boxShadow='none'>
            <CardBody>
              <Icon
                as={ConciergeBell}
                viewBox='0 0 24 24'
                boxSize={14}
                mb={4}
                color='blue.500'
              />
              <Text as='h3' fontSize='xl' color='gray.700' mb={2}>
                1. Personlig service
              </Text>
              <Text fontSize='lg' color='gray.700'>
                Vi erbjuder skräddarsydda lösningar som passar just ditt
                företags behov.
              </Text>
            </CardBody>
          </Card>
          <Card flex='1' border='none' boxShadow='none'>
            <CardBody>
              <Icon
                as={LockKeyhole}
                viewBox='0 0 24 24'
                boxSize={14}
                mb={4}
                color='blue.500'
              />
              <Text as='h3' fontSize='xl' color='gray.700' mb={2}>
                2. Fast pris utan dolda avgifter
              </Text>
              <Text fontSize='lg' color='gray.700'>
                Våra tjänster kommer med tydliga och konkurrenskraftiga priser.
              </Text>
            </CardBody>
          </Card>
          <Card flex='1' border='none' boxShadow='none'>
            <CardBody>
              <Icon
                as={CloudCheck}
                viewBox='0 0 24 24'
                boxSize={14}
                mb={4}
                color='blue.500'
              />
              <Text as='h3' fontSize='xl' color='gray.700' mb={2}>
                3. Digitalt och enkelt
              </Text>
              <Text fontSize='lg' color='gray.700'>
                Vi använder moderna digitala verktyg för att göra bokföringen
                smidig och tillgänglig när som helst.
              </Text>
            </CardBody>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}

export default WhyUsSection
