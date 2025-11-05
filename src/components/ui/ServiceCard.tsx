import { Box, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { Check } from 'lucide-react'

interface ServiceCardProps {
  name: string
  price?: number
  period?: 'månad' | 'engång' | 'ingår'
  description: string
  features?: string[]
  revenue?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  revenue
}) => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      p={6}
      boxShadow='md'
      bg='white'
      _hover={{ boxShadow: 'lg' }}
      transition='all 0.2s'
    >
      <Heading as='h3' size='md' mb={2}>
        {name}
      </Heading>

      {price && (
        <Text fontSize='2xl' fontWeight='bold' color='blue.600' mb={2}>
          {price.toLocaleString('sv-SE')} kr
          <Text as='span' fontSize='sm' fontWeight='normal' color='gray.600'>
            {period === 'månad' && '/mån'}
            {period === 'engång' && ' (engångsavgift)'}
          </Text>
        </Text>
      )}

      {!price && period === 'ingår' && (
        <Text fontSize='lg' fontWeight='semibold' color='green.600' mb={2}>
          Ingår i tjänsten
        </Text>
      )}

      {revenue && (
        <Text fontSize='sm' color='gray.500' mb={4} fontWeight='medium'>
          Omsättning: {revenue}
        </Text>
      )}

      <Text color='gray.600' mb={4}>
        {description}
      </Text>

      {features && features.length > 0 && (
        <List spacing={2}>
          {features.map((feature, index) => (
            <ListItem key={index} display='flex' alignItems='flex-start'>
              <ListIcon
                as={Check}
                color='green.500'
                boxSize={5}
                mt={0.5}
                flexShrink={0}
              />
              <Text fontSize='sm'>{feature}</Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}

export default ServiceCard
