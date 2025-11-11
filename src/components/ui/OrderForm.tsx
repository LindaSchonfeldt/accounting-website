import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Collapse,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
  Grid
} from '@chakra-ui/react'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import { services_full } from '../../data/services_full'
import OrderSummary from './OrderSummary'

interface FormInputs {
  services: string[]
  selectedPlans: { [key: string]: string }
  name: string
  email: string
  phone?: string
  message?: string
}

const OrderForm: React.FC = () => {
  console.log('🔍 Environment Variables Test:', {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    ORDER_TEMPLATE: import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID,
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    ALL_ENV: import.meta.env
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<FormInputs>({
    defaultValues: {
      services: [],
      selectedPlans: {}
    }
  })

  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedPlans, setSelectedPlans] = useState<{
    [key: string]: string
  }>({})

  const toast = useToast()

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleServiceChange = (values: string[]) => {
    setSelectedServices(values)
    setValue('services', values)

    const newPlans = { ...selectedPlans }
    Object.keys(newPlans).forEach((key) => {
      if (!values.includes(key)) {
        delete newPlans[key]
      }
    })
    setSelectedPlans(newPlans)
    setValue('selectedPlans', newPlans)
  }

  const handlePlanChange = (serviceTitle: string, planName: string) => {
    const newPlans = { ...selectedPlans, [serviceTitle]: planName }
    setSelectedPlans(newPlans)
    setValue('selectedPlans', newPlans)
  }

  const handleClearPlan = (serviceTitle: string) => {
    const newPlans = { ...selectedPlans }
    delete newPlans[serviceTitle]
    setSelectedPlans(newPlans)
    setValue('selectedPlans', newPlans)
  }

  const onSubmit = async (data: FormInputs) => {
    const servicesWithPlans = selectedServices.map((serviceTitle) => {
      const service = services_full.find((s) => s.title === serviceTitle)
      const hasPlans = service?.plans && service.plans.length > 0
      const planSelected = selectedPlans[serviceTitle]

      if (hasPlans && !planSelected) {
        toast({
          title: 'Välj paket',
          description: `Vänligen välj ett paket för ${serviceTitle}`,
          status: 'error',
          duration: 5000,
          isClosable: true
        })
        return null
      }

      return {
        service: serviceTitle,
        plan: planSelected || null
      }
    })

    if (servicesWithPlans.includes(null)) {
      return
    }

    // Calculate total price
    let totalPrice = 0
    const priceBreakdown: string[] = []

    // Format services with plans and prices for email
    const servicesText = servicesWithPlans
      .map((item) => {
        if (!item) return ''

        const service = services_full.find((s) => s.title === item.service)
        if (!service) return item.service

        if (item.plan) {
          const plan = service.plans?.find((p) => p.name === item.plan)
          if (plan && 'price' in plan && plan.price) {
            totalPrice += plan.price
            const periodText =
              plan.period === 'månad'
                ? '/mån'
                : plan.period === 'år'
                ? '/år'
                : plan.period === 'tillfälle'
                ? '/tillfälle'
                : ' engångsavgift'

            return `${item.service} - ${item.plan} (${plan.price.toLocaleString(
              'sv-SE'
            )} kr${periodText})`
          }
          return `${item.service} - ${item.plan}`
        }
        return item.service
      })
      .join('\n')

    // Calculate VAT (25%)
    const vatAmount = totalPrice * 0.25
    const totalWithVat = totalPrice + vatAmount

    // EmailJS configuration
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Ej angivet',
      message: data.message || 'Inget meddelande',
      services: servicesText,
      total_excl_vat: totalPrice.toLocaleString('sv-SE'),
      vat_amount: vatAmount.toLocaleString('sv-SE'),
      total_incl_vat: totalWithVat.toLocaleString('sv-SE')
    }

    try {
      // Check if environment variables are loaded
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      console.log('EmailJS Config Check:', {
        serviceId: serviceId ? 'Loaded ✓' : 'MISSING ✗',
        templateId: templateId ? 'Loaded ✓' : 'MISSING ✗',
        publicKey: publicKey ? 'Loaded ✓' : 'MISSING ✗'
      })

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Check your .env file.')
      }

      console.log('Sending email with params:', templateParams)

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      )

      console.log('Email sent successfully:', response)

      toast({
        title: 'Beställning skickad!',
        description: 'Vi återkommer inom 24 timmar.',
        status: 'success',
        duration: 5000,
        isClosable: true
      })

      // Reset form
      setSelectedServices([])
      setSelectedPlans({})
      setValue('services', [])
      setValue('selectedPlans', {})
      setValue('name', '')
      setValue('email', '')
      setValue('phone', '')
      setValue('message', '')
    } catch (error: any) {
      console.error('Full EmailJS error:', error)
      console.error('Error text:', error.text || error.message)
      
      toast({
        title: 'Något gick fel',
        description: error.text || error.message || 'Kunde inte skicka beställningen. Försök igen.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }
  }

  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '1fr 350px' }}
      gap={8}
      alignItems='start'
    >
      <VStack spacing={6} align='stretch'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.services}>
            <FormLabel
              fontFamily='heading'
              fontSize='2xl'
              fontWeight='bold'
              textAlign='left'
              color='blue.800'
              mb={4}
            >
              Välj tjänster{' '}
              <Text as='span' color='red.500'>
                *
              </Text>
            </FormLabel>
            <CheckboxGroup
              value={selectedServices}
              onChange={handleServiceChange}
            >
              <Stack spacing={4} align='flex-start' width='100%'>
                {services_full.map((service) => {
                  const isSelected = selectedServices.includes(service.title)
                  const hasPlans = service.plans && service.plans.length > 0
                  const planSelected = selectedPlans[service.title]

                  return (
                    <Box
                      key={service.title}
                      width='100%'
                      display='flex'
                      flexDirection='column'
                      alignItems='flex-start'
                    >
                      <Checkbox value={service.title} colorScheme='blue'>
                        <Text
                          fontSize='md'
                          fontWeight='medium'
                          textAlign='left'
                          fontFamily='body'
                        >
                          {service.title}
                        </Text>
                      </Checkbox>

                      {hasPlans && (
                        <Collapse in={isSelected} animateOpacity>
                          <Box
                            mt={3}
                            p={3}
                            bg='gray.50'
                            borderRadius='sm'
                            borderLeft='3px solid'
                            borderColor={
                              isSelected && !planSelected
                                ? 'red.500'
                                : 'blue.500'
                            }
                            width='100%'
                          >
                            <Text
                              fontSize='sm'
                              fontWeight='semibold'
                              mb={2}
                              color='gray.600'
                              textAlign='left'
                              fontFamily='body'
                            >
                              Välj paket:{' '}
                              <Text as='span' color='red.500'>
                                *
                              </Text>
                            </Text>
                            <RadioGroup
                              value={selectedPlans[service.title] || ''}
                              onChange={(value) =>
                                handlePlanChange(service.title, value)
                              }
                            >
                              <Stack spacing={2} align='flex-start'>
                                {service.plans.map((plan) => (
                                  <Radio
                                    key={plan.name}
                                    value={plan.name}
                                    colorScheme='blue'
                                    size='sm'
                                  >
                                    <Text
                                      fontSize='sm'
                                      textAlign='left'
                                      fontFamily='body'
                                    >
                                      {plan.name}
                                      {'price' in plan && plan.price && (
                                        <Text
                                          as='span'
                                          color='blue.600'
                                          fontWeight='semibold'
                                          ml={2}
                                        >
                                          ({plan.price.toLocaleString('sv-SE')}{' '}
                                          kr
                                          {plan.period === 'månad' && '/mån'}
                                          {plan.period === 'engång' &&
                                            ' engångsavgift'}
                                          {plan.period === 'år' && '/år'}
                                          {plan.period === 'tillfälle' &&
                                            '/tillfälle'}
                                          )
                                        </Text>
                                      )}
                                      {'revenue' in plan && plan.revenue && (
                                        <Text
                                          as='span'
                                          color='gray.500'
                                          fontSize='xs'
                                          ml={1}
                                        >
                                          Omsättning: {plan.revenue}
                                        </Text>
                                      )}
                                    </Text>
                                  </Radio>
                                ))}
                              </Stack>
                            </RadioGroup>

                            {planSelected && (
                              <Button
                                size='sm'
                                variant='ghost'
                                colorScheme='red'
                                onClick={() => {
                                  // Remove the service from selected services
                                  const newServices = selectedServices.filter(
                                    (s) => s !== service.title
                                  )
                                  setSelectedServices(newServices)
                                  setValue('services', newServices)

                                  // Remove the plan
                                  handleClearPlan(service.title)
                                }}
                                mt={3}
                                leftIcon={<X size={14} />}
                                fontFamily='body'
                              >
                                Rensa val
                              </Button>
                            )}

                            {isSelected && !planSelected && (
                              <Text
                                color='red.500'
                                fontSize='xs'
                                mt={4}
                                textAlign='left'
                                fontFamily='body'
                              >
                                Vänligen välj ett paket
                              </Text>
                            )}
                          </Box>
                        </Collapse>
                      )}
                    </Box>
                  )
                })}
              </Stack>
            </CheckboxGroup>
            {selectedServices.length === 0 && (
              <Text
                color='red.500'
                fontSize='sm'
                mt={4}
                textAlign='left'
                fontFamily='body'
              >
                * Vänligen välj minst en tjänst
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.name} mt={6}>
            <FormLabel textAlign='left' fontFamily='body' fontWeight='semibold'>
              Namn
            </FormLabel>
            <Input
              type='text'
              placeholder='Ditt namn'
              fontFamily='body'
              {...register('name', { required: 'Namn är obligatoriskt' })}
            />
            <FormErrorMessage textAlign='left' fontFamily='body'>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email} mt={6}>
            <FormLabel textAlign='left' fontFamily='body' fontWeight='semibold'>
              E-post
            </FormLabel>
            <Input
              type='email'
              placeholder='Din e-post'
              fontFamily='body'
              {...register('email', {
                required: 'E-post är obligatoriskt',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ogiltig e-postadress'
                }
              })}
            />
            <FormErrorMessage textAlign='left' fontFamily='body'>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.phone} mt={6}>
            <FormLabel textAlign='left' fontFamily='body' fontWeight='semibold'>
              Telefonnummer{' '}
              <Text as='span' fontSize='xs' color='gray.500' ml={1}>
                (frivilligt)
              </Text>
            </FormLabel>
            <Input
              type='tel'
              placeholder='Ditt telefonnummer'
              fontFamily='body'
              {...register('phone')}
            />
            <FormErrorMessage textAlign='left' fontFamily='body'>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.message} mt={6}>
            <FormLabel textAlign='left' fontFamily='body' fontWeight='semibold'>
              Meddelande{' '}
              <Text as='span' fontSize='xs' color='gray.500' ml={1}>
                (frivilligt)
              </Text>
            </FormLabel>
            <Textarea
              placeholder='Ditt meddelande'
              minH='120px'
              resize='vertical'
              fontFamily='body'
              {...register('message')}
            />
            <FormErrorMessage textAlign='left' fontFamily='body'>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            mt={8}
            width='100%'
          >
            <Button
              type='button'
              variant='outline'
              colorScheme='blue'
              size={{ base: 'md', md: 'lg' }}
              width={{ base: '100%', sm: 'auto' }}
              fontFamily='body'
              onClick={() => {
                setSelectedServices([])
                setSelectedPlans({})
                setValue('services', [])
                setValue('selectedPlans', {})
                setValue('name', '')
                setValue('email', '')
                setValue('phone', '')
                setValue('message', '')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Återställ
            </Button>

            <Button
              type='submit'
              colorScheme='blue'
              size={{ base: 'md', md: 'lg' }}
              width={{ base: '100%', sm: 'auto' }}
              isLoading={isSubmitting}
              loadingText='Skickar...'
              px={8}
              fontFamily='body'
            >
              Skicka beställning
            </Button>
          </Stack>
        </form>
      </VStack>

      {/* Order Summary - Desktop only, sticky */}
      <Box display={{ base: 'none', lg: 'block' }}>
        <OrderSummary
          selectedServices={selectedServices}
          selectedPlans={selectedPlans}
        />
      </Box>

      {/* Order Summary - Mobile, at bottom */}
      <Box display={{ base: 'block', lg: 'none' }}>
        <OrderSummary
          selectedServices={selectedServices}
          selectedPlans={selectedPlans}
        />
      </Box>
    </Grid>
  )
}

export default OrderForm
