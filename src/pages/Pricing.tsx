import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

import Meta from '../components/Meta'
import { services_full } from '../data/services_full'

const Pricing = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <>
      <Meta
        title='Priser - Bokföring från 295 kr/mån | Billig Bokföring'
        description='Transparenta priser för bokföring, momsrapport, årsbokslut och deklaration. Löpande bokföring från 295 kr/mån. Inga dolda avgifter.'
        keywords='bokföring pris, bokföringskostnad, billig bokföring, redovisning pris, årsbokslut kostnad, momsrapport pris, deklaration kostnad'
        ogUrl='https://billigbokforing.se/priser'
      />

      <Box as='main'>
        {/* Hero Section */}
        <Box
          bg='blue.50'
          py={{ base: 8, md: 12, lg: 16 }}
          width='100vw'
          position='relative'
          left='50%'
          right='50%'
          marginLeft='-50vw'
          marginRight='-50vw'
        >
          <Container maxW='container.xl' px={{ base: 4, md: 6 }}>
            <VStack spacing={{ base: 3, md: 4 }} textAlign='center'>
              <Heading
                as='h1'
                size={{ base: 'xl', md: '2xl' }}
                px={{ base: 2, md: 0 }}
              >
                Transparenta priser för professionell bokföring
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                color='gray.600'
                maxW='3xl'
                px={{ base: 2, md: 0 }}
              >
                Inga dolda avgifter. Inga bindningstider. Välj det paket som
                passar ditt företag bäst.
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight='bold'
                color='blue.600'
              >
                Löpande bokföring från 295 kr/månad
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Pricing Tables */}
        <Container
          maxW='container.xl'
          py={{ base: 8, md: 12, lg: 16 }}
          px={{ base: 4, md: 6 }}
        >
          <VStack spacing={{ base: 12, md: 16 }} align='stretch'>
            {services_full.map((service) => (
              <Box key={service.title}>
                <VStack spacing={{ base: 3, md: 4 }} mb={{ base: 6, md: 8 }}>
                  <Heading
                    as='h2'
                    size={{ base: 'lg', md: 'xl' }}
                    textAlign='center'
                    px={{ base: 2, md: 0 }}
                  >
                    {service.title}
                  </Heading>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    textAlign='center'
                    maxW='3xl'
                    px={{ base: 2, md: 0 }}
                  >
                    {service.description}
                  </Text>
                </VStack>

                {isMobile ? (
                  // Mobile Card Layout
                  <VStack spacing={4} align='stretch'>
                    {service.plans.map((plan, index) => (
                      <Box
                        key={index}
                        borderWidth='1px'
                        borderRadius='lg'
                        p={5}
                        boxShadow='md'
                        bg='white'
                      >
                        <VStack align='stretch' spacing={3}>
                          <Box>
                            <Text fontWeight='bold' fontSize='lg' mb={1}>
                              {plan.name}
                              {'badge' in plan && plan.badge && (
                                <Badge ml={2} colorScheme='green' fontSize='xs'>
                                  {plan.badge}
                                </Badge>
                              )}
                            </Text>
                            {'revenue' in plan && plan.revenue && (
                              <Text fontSize='xs' color='gray.500'>
                                {plan.revenue}
                              </Text>
                            )}
                          </Box>

                          <Box py={2}>
                            {plan.price ? (
                              <Text
                                fontSize='2xl'
                                fontWeight='bold'
                                color='blue.600'
                              >
                                {plan.price.toLocaleString('sv-SE')} kr
                                <Text
                                  as='span'
                                  fontSize='sm'
                                  fontWeight='normal'
                                  color='gray.600'
                                  display='block'
                                  mt={1}
                                >
                                  {plan.period === 'månad' && '/mån'}
                                  {plan.period === 'engång' && 'engångsavgift'}
                                  {plan.period === 'tillfälle' && '/tillfälle'}
                                  {plan.period === 'år' && '/år'}
                                </Text>
                              </Text>
                            ) : (
                              <Text
                                fontSize='md'
                                fontWeight='semibold'
                                color='green.600'
                              >
                                {plan.period === 'ingår' && 'Ingår i tjänsten'}
                              </Text>
                            )}
                          </Box>

                          <Text color='gray.700' fontSize='sm'>
                            {plan.description}
                          </Text>

                          {'features' in plan &&
                            plan.features &&
                            plan.features.length > 0 && (
                              <List spacing={2} mt={2}>
                                {plan.features.map((feature, fIndex) => (
                                  <ListItem
                                    key={fIndex}
                                    display='flex'
                                    alignItems='flex-start'
                                    fontSize='sm'
                                  >
                                    <ListIcon
                                      as={Check}
                                      color='green.500'
                                      boxSize={4}
                                      mt={0.5}
                                      flexShrink={0}
                                    />
                                    <Text>{feature}</Text>
                                  </ListItem>
                                ))}
                              </List>
                            )}
                        </VStack>
                      </Box>
                    ))}
                  </VStack>
                ) : (
                  // Desktop Table Layout
                  <TableContainer
                    borderWidth='1px'
                    borderRadius='lg'
                    overflow='hidden'
                    boxShadow='md'
                  >
                    <Table variant='simple' size='lg'>
                      <Thead bg='blue.50'>
                        <Tr>
                          <Th width='25%'>Paket</Th>
                          <Th width='20%'>Pris</Th>
                          <Th width='55%'>Beskrivning</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {service.plans.map((plan, index) => (
                          <Tr
                            key={index}
                            _hover={{ bg: 'gray.50' }}
                            transition='background 0.2s'
                          >
                            <Td fontWeight='bold'>
                              {plan.name}
                              {'badge' in plan && plan.badge && (
                                <Badge ml={2} colorScheme='green' fontSize='xs'>
                                  {plan.badge}
                                </Badge>
                              )}
                              {'revenue' in plan && plan.revenue && (
                                <Text
                                  fontSize='xs'
                                  color='gray.500'
                                  fontWeight='normal'
                                  mt={1}
                                >
                                  {plan.revenue}
                                </Text>
                              )}
                            </Td>
                            <Td>
                              {plan.price ? (
                                <Text
                                  fontSize='xl'
                                  fontWeight='bold'
                                  color='blue.600'
                                >
                                  {plan.price.toLocaleString('sv-SE')} kr
                                  <Text
                                    as='span'
                                    fontSize='sm'
                                    fontWeight='normal'
                                    color='gray.600'
                                    display='block'
                                  >
                                    {plan.period === 'månad' && '/mån'}
                                    {plan.period === 'engång' &&
                                      'engångsavgift'}
                                    {plan.period === 'tillfälle' &&
                                      '/tillfälle'}
                                    {plan.period === 'år' && '/år'}
                                  </Text>
                                </Text>
                              ) : (
                                <Text
                                  fontSize='md'
                                  fontWeight='semibold'
                                  color='green.600'
                                >
                                  {plan.period === 'ingår' &&
                                    'Ingår i tjänsten'}
                                </Text>
                              )}
                            </Td>
                            <Td>
                              <Text color='gray.700' mb={2}>
                                {plan.description}
                              </Text>
                              {'features' in plan &&
                                plan.features &&
                                plan.features.length > 0 && (
                                  <List spacing={1} mt={3}>
                                    {plan.features.map((feature, fIndex) => (
                                      <ListItem
                                        key={fIndex}
                                        display='flex'
                                        alignItems='flex-start'
                                        fontSize='sm'
                                      >
                                        <ListIcon
                                          as={Check}
                                          color='green.500'
                                          boxSize={4}
                                          mt={0.5}
                                        />
                                        <Text>{feature}</Text>
                                      </ListItem>
                                    ))}
                                  </List>
                                )}
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                )}
              </Box>
            ))}
          </VStack>
        </Container>

        {/* CTA Section */}
        <Box
          bg='blue.700'
          py={{ base: 12, md: 16, lg: 20 }}
          width='100vw'
          position='relative'
          left='50%'
          right='50%'
          marginLeft='-50vw'
          marginRight='-50vw'
        >
          <Container
            maxW='container.md'
            textAlign='center'
            px={{ base: 4, md: 6 }}
          >
            <VStack spacing={{ base: 4, md: 6 }}>
              <Heading
                as='h2'
                size={{ base: 'lg', md: 'xl' }}
                color='white'
                px={{ base: 2, md: 0 }}
              >
                Redo att komma igång?
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='white'
                px={{ base: 2, md: 0 }}
              >
                Beställ dina tjänster idag och få professionell bokföring till
                fast pris.
              </Text>
              <Button
                as={Link}
                to='/order'
                size={{ base: 'md', md: 'lg' }}
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
