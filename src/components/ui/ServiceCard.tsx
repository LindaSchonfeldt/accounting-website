import { Box, Heading, Text } from '@chakra-ui/react'

interface PlanCardProps {
  name: string
  price?: number
  priceUnit?: string
  revenue?: string
  description: string
  features?: string[]
}

const ServiceCard: React.FC<PlanCardProps> = ({
  name,
  price,
  priceUnit = 'kr/månad',
  revenue,
  description,
  features
}) => (
  <Box p={6} borderWidth='1px' borderRadius='lg' boxShadow='md' bg='white'>
    <Heading as='h3' size='md' mb={2}>
      {name}
    </Heading>
    {typeof price === 'number' && (
      <Text fontSize='2xl' fontWeight='bold' color='blue.600' mb={2}>
        {price} {priceUnit}
      </Text>
    )}
    {revenue && (
      <Text fontSize='sm' color='gray.500' mb={3}>
        Omsättning: {revenue}
      </Text>
    )}
    <Text mb={4} fontSize='sm'>
      {description}
    </Text>
    {features && (
      <Box as='ul' pl={5}>
        {features.map((feature, idx) => (
          <Text as='li' key={idx} fontSize='sm' mb={2}>
            {feature}
          </Text>
        ))}
      </Box>
    )}
  </Box>
)

export default ServiceCard
