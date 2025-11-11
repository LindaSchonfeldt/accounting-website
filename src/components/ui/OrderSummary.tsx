import {
  Box,
  Divider,
  Heading,
  Text,
  VStack,
  HStack,
  Badge
} from '@chakra-ui/react'
import { services_full } from '../../data/services_full'

interface OrderSummaryProps {
  selectedServices: string[]
  selectedPlans: { [key: string]: string }
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  selectedServices,
  selectedPlans
}) => {
  const TAX_RATE = 0.25 // 25% moms
  const DISCOUNT_RATE = 0.1 // 10% discount

  const calculateTotal = () => {
    let subtotal = 0
    let discountAmount = 0
    const items: Array<{
      service: string
      plan: string
      price: number
      period: string
      hasDiscount: boolean
    }> = []

    const bookkeepingSelected = selectedServices.includes('Löpande bokföring')
    const discountableServices = [
      'Momsrapport',
      'Årsredovisning',
      'Inkomstdeklaration'
    ]

    selectedServices.forEach((serviceTitle) => {
      const service = services_full.find((s) => s.title === serviceTitle)
      if (!service) return

      const planName = selectedPlans[serviceTitle]
      if (!planName) return

      const plan = service.plans.find((p) => p.name === planName)
      if (!plan || !('price' in plan) || !plan.price) return

      const hasDiscount =
        bookkeepingSelected && discountableServices.includes(serviceTitle)
      const price = plan.price

      subtotal += price

      if (hasDiscount) {
        discountAmount += price * DISCOUNT_RATE
      }

      items.push({
        service: serviceTitle,
        plan: planName,
        price: price,
        period: plan.period || '',
        hasDiscount: hasDiscount
      })
    })

    const subtotalAfterDiscount = subtotal - discountAmount
    const tax = subtotalAfterDiscount * TAX_RATE
    const total = subtotalAfterDiscount + tax

    return {
      items,
      subtotal,
      discountAmount,
      subtotalAfterDiscount,
      tax,
      total
    }
  }

  const { items, subtotal, discountAmount, subtotalAfterDiscount, tax, total } =
    calculateTotal()

  if (items.length === 0) {
    return null
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('sv-SE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  }

  const getPeriodText = (period: string) => {
    switch (period) {
      case 'månad':
        return '/mån'
      case 'år':
        return '/år'
      case 'engång':
        return 'engångsavgift'
      case 'tillfälle':
        return '/tillfälle'
      default:
        return ''
    }
  }

  return (
    <Box
      borderWidth='1px'
      borderColor='blue.200'
      borderRadius='sm'
      p={6}
      bg='blue.50'
      position='sticky'
      top={4}
    >
      <Heading as='h3' size='md' mb={4} fontFamily='heading' color='blue.800'>
        Sammanfattning
      </Heading>

      <VStack spacing={3} align='stretch'>
        {items.map((item, index) => (
          <Box key={index}>
            <HStack justify='space-between' align='flex-start'>
              <Text
                fontSize='sm'
                fontWeight='semibold'
                fontFamily='body'
                flex='1'
              >
                {item.service}
                {item.hasDiscount && (
                  <Badge ml={2} colorScheme='green' fontSize='xs'>
                    -10%
                  </Badge>
                )}
              </Text>
            </HStack>
            <HStack justify='space-between' mt={1} align='flex-start'>
              <Text fontSize='xs' color='gray.600' fontFamily='body' flex='1'>
                {item.plan}
              </Text>
              <Text
                fontSize='sm'
                fontWeight='medium'
                fontFamily='body'
                textAlign='right'
                whiteSpace='nowrap'
              >
                {formatPrice(item.price)} kr {getPeriodText(item.period)}
              </Text>
            </HStack>
          </Box>
        ))}

        <Divider borderColor='blue.300' my={2} />

        <HStack justify='space-between'>
          <Text fontSize='sm' fontFamily='body'>
            Delsumma:
          </Text>
          <Text
            fontSize='sm'
            fontWeight='medium'
            fontFamily='body'
            textAlign='right'
          >
            {formatPrice(subtotal)} kr
          </Text>
        </HStack>

        {discountAmount > 0 && (
          <HStack justify='space-between'>
            <Text fontSize='sm' fontFamily='body' color='green.600'>
              Rabatt (10%):
            </Text>
            <Text
              fontSize='sm'
              fontWeight='medium'
              fontFamily='body'
              color='green.600'
              textAlign='right'
            >
              -{formatPrice(discountAmount)} kr
            </Text>
          </HStack>
        )}

        {discountAmount > 0 && (
          <HStack justify='space-between'>
            <Text fontSize='sm' fontFamily='body' fontWeight='semibold'>
              Delsumma efter rabatt:
            </Text>
            <Text
              fontSize='sm'
              fontWeight='semibold'
              fontFamily='body'
              textAlign='right'
            >
              {formatPrice(subtotalAfterDiscount)} kr
            </Text>
          </HStack>
        )}

        <HStack justify='space-between'>
          <Text fontSize='sm' fontFamily='body'>
            Moms (25%):
          </Text>
          <Text
            fontSize='sm'
            fontWeight='medium'
            fontFamily='body'
            textAlign='right'
          >
            {formatPrice(tax)} kr
          </Text>
        </HStack>

        <Divider borderColor='blue.300' my={2} />

        <HStack justify='space-between'>
          <Text fontSize='lg' fontWeight='bold' fontFamily='body'>
            Totalt:
          </Text>
          <Text
            fontSize='lg'
            fontWeight='bold'
            color='blue.600'
            fontFamily='body'
            textAlign='right'
          >
            {formatPrice(total)} kr
          </Text>
        </HStack>

        {discountAmount > 0 && (
          <Text
            fontSize='xs'
            color='green.600'
            fontWeight='semibold'
            mt={2}
            fontFamily='body'
            textAlign='center'
          >
            Du sparar {formatPrice(discountAmount + discountAmount * TAX_RATE)}{' '}
            kr inkl. moms!
          </Text>
        )}

        <Text
          fontSize='xs'
          color='gray.600'
          mt={2}
          fontFamily='body'
          textAlign='center'
        >
          * Detta är en uppskattning. Exakt pris bekräftas i offert.
        </Text>
      </VStack>
    </Box>
  )
}

export default OrderSummary
