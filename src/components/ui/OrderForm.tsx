import { SubmitHandler, useForm } from 'react-hook-form'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Box,
  VStack,
  Text,
  Checkbox,
  CheckboxGroup,
  Stack,
  Button,
  Radio,
  RadioGroup,
  Collapse,
  useToast
} from '@chakra-ui/react'
import { services_full } from '../../data/services_full'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

interface FormInputs {
  name: string
  email: string
  phone?: string
  message?: string
  services: string[]
  selectedPlans: Record<string, string>
}

const OrderForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger // Add trigger for manual validation
  } = useForm<FormInputs>({
    defaultValues: {
      services: [],
      selectedPlans: {}
    }
  })
  const toast = useToast()

  const selectedServices = watch('services')
  const selectedPlans = watch('selectedPlans')

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    // Check if validation passes
    const isValid = await trigger() // Triggers all validations

    // Custom validation for plans
    const servicesWithPlans = services_full.filter(
      (service) =>
        data.services.includes(service.title) &&
        service.plans &&
        service.plans.length > 0
    )

    const missingPlans = servicesWithPlans.filter(
      (service) => !data.selectedPlans[service.title]
    )

    if (missingPlans.length > 0 || !isValid) {
      toast({
        title: 'Formuläret är inte komplett',
        description: 'Vänligen fyll i alla obligatoriska fält.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
      return
    }

    setIsSubmitting(true)

    // Format the email message
    const emailData = {
      to_email: 'your-email@example.com', // Your email
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Ej angiven',
      message: data.message || 'Inget meddelande',
      services: data.services.join(', '),
      selected_plans: Object.entries(data.selectedPlans)
        .map(([service, plan]) => `${service}: ${plan}`)
        .join('\n')
    }

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Get from EmailJS dashboard
        'YOUR_TEMPLATE_ID', // Get from EmailJS dashboard
        emailData,
        'YOUR_PUBLIC_KEY' // Get from EmailJS dashboard
      )

      toast({
        title: 'Beställning skickad!',
        description: 'Vi återkommer till dig inom 24 timmar.',
        status: 'success',
        duration: 5000,
        isClosable: true
      })

      // Reset form
      setValue('services', [])
      setValue('selectedPlans', {})
      setValue('name', '')
      setValue('email', '')
      setValue('phone', '')
      setValue('message', '')
    } catch (error) {
      toast({
        title: 'Ett fel uppstod',
        description: 'Vänligen försök igen eller kontakta oss direkt.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleServiceChange = (values: string[]) => {
    setValue('services', values as string[])

    // Remove plans for unchecked services
    const newPlans = { ...selectedPlans }
    Object.keys(newPlans).forEach((service) => {
      if (!values.includes(service)) {
        delete newPlans[service]
      }
    })
    setValue('selectedPlans', newPlans)
  }

  const handlePlanChange = (serviceName: string, planName: string) => {
    setValue('selectedPlans', {
      ...selectedPlans,
      [serviceName]: planName
    })
  }

  return (
    <Box
      maxW='800px'
      mx='auto'
      p={6}
      borderWidth='1px'
      borderRadius='lg'
      bg='white'
      boxShadow='md'
    >
      <VStack spacing={6} align='stretch'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Service Selection */}
          <FormControl isInvalid={!!errors.services}>
            <FormLabel fontWeight='bold'>
              Välj tjänster{' '}
              <Text as='span' color='red.500'>
                *
              </Text>
            </FormLabel>
            <CheckboxGroup
              value={selectedServices}
              onChange={handleServiceChange}
            >
              <Stack spacing={4} alignItems='flex-start'>
                {services_full.map((service) => {
                  const isSelected = selectedServices.includes(service.title)
                  const hasPlans = service.plans && service.plans.length > 0
                  const planSelected = selectedPlans[service.title]

                  return (
                    <Box
                      key={service.title}
                      width='100%'
                      alignItems='flex-start'
                      display='flex'
                      flexDirection='column'
                    >
                      <Checkbox value={service.title} colorScheme='blue'>
                        <Text fontSize='sm' fontWeight='medium'>
                          {service.title}
                        </Text>
                      </Checkbox>

                      {/* Show radio buttons when service is selected and has plans */}
                      {hasPlans && (
                        <Collapse in={isSelected} animateOpacity>
                          <Box
                            ml={0}
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
                          >
                            <Text
                              fontSize='xs'
                              fontWeight='semibold'
                              mb={2}
                              color='gray.600'
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
                              <Stack spacing={2}>
                                {service.plans.map((plan) => (
                                  <Radio
                                    key={plan.name}
                                    value={plan.name}
                                    colorScheme='blue'
                                    size='sm'
                                  >
                                    <Text fontSize='sm'>
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
                            {isSelected && !planSelected && (
                              <Text color='red.500' fontSize='xs' mt={2}>
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
              <Text color='red.500' fontSize='sm' mt={2}>
                Vänligen välj minst en tjänst
              </Text>
            )}
          </FormControl>

          {/* Name */}
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Namn</FormLabel>
            <Input
              type='text'
              placeholder='Ditt namn'
              {...register('name', { required: 'Namn är obligatoriskt' })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          {/* Email */}
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-post</FormLabel>
            <Input
              type='email'
              placeholder='Din e-post'
              {...register('email', {
                required: 'E-post är obligatoriskt',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ogiltig e-postadress'
                }
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          {/* Phone */}
          <FormControl isInvalid={!!errors.phone}>
            <FormLabel>
              Telefonnummer{' '}
              <Text as='span' fontSize='xs' color='gray.500' ml={1}>
                (frivilligt)
              </Text>
            </FormLabel>
            <Input
              type='tel'
              placeholder='Ditt telefonnummer'
              {...register('phone')}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>

          {/* Message */}
          <FormControl isInvalid={!!errors.message}>
            <FormLabel>
              Meddelande{' '}
              <Text as='span' fontSize='xs' color='gray.500' ml={1}>
                (frivilligt)
              </Text>
            </FormLabel>
            <Input
              as='textarea'
              placeholder='Ditt meddelande'
              rows={4}
              {...register('message')}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

          {/* Submit Button */}
          <Button
            type='submit'
            colorScheme='blue'
            size='lg'
            w='full'
            mt={4}
            isLoading={isSubmitting}
            loadingText='Skickar...'
          >
            Skicka beställning
          </Button>
        </form>
      </VStack>
    </Box>
  )
}

export default OrderForm
