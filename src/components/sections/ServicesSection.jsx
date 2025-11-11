import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import {
  ArrowRight,
  BarChart3,
  Coins,
  FileText,
  Handshake,
  LibraryBig,
  ReceiptText
} from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'

import { fadeInUp, transitions } from '../animations'
import { MotionBox } from '../ui/MotionBox'
import { services_full } from '../../data/services_full'

// Icon mapping
const iconMap = {
  LibraryBig,
  Coins,
  BarChart3,
  FileText,
  ReceiptText,
  Handshake
}

const ServicesSection = () => (
  <Box as='section' id='services' py={16} bg='white'>
    <Container maxW='100vw' px={0}>
      <Heading as='h2' size='xl' textAlign='center' mb={8}>
        Våra tjänster
      </Heading>
      <Text
        fontSize='lg'
        color='gray.600'
        mb={8}
        maxW='2xl'
        mx='auto'
        textAlign='center'
      >
        Vi erbjuder flexibla paket för att passa just ditt företags behov och
        budget.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} px={0}>
        {services_full.map((service, index) => {
          const IconComponent = iconMap[service.icon]

          return (
            <MotionBox
              key={service.title}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              exit={fadeInUp.exit}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...transitions.smooth, delay: index * 0.1 }}
              p={{ base: 4, md: 6 }}
              borderWidth='1px'
              borderRadius='lg'
              boxShadow='md'
              _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
              bg='gray.50'
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              <Box color='blue.600' mb={4}>
                <IconComponent size={48} />
              </Box>
              <Heading as='h3' size='md' mb={4} textAlign='center'>
                {service.title}
              </Heading>
              <Text color='gray.600' mb={4} flex='1' textAlign='center'>
                {service.description}
              </Text>

              <Button
                as={RouterLink}
                to={`/tjanster#${index}`}
                colorScheme='blue'
                size='sm'
                rightIcon={<ArrowRight size={16} />}
                w='full'
              >
                Läs mer
              </Button>
            </MotionBox>
          )
        })}
      </SimpleGrid>
    </Container>
  </Box>
)

export default ServicesSection
