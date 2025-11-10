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
  useToast,
  VStack
} from '@chakra-ui/react'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { services_full } from '../../data/services_full'

interface FormInputs {
  services: string[]
  selectedPlans: { [key: string]: string }
  name: string
  email: string
  phone?: string
  message?: string
}

const OrderForm: React.FC = () => {
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

    console.log('Form data:', {
      ...data,
      servicesWithPlans
    })

    toast({
      title: 'Beställning skickad!',
      description: 'Vi återkommer inom 24 timmar.',
      status: 'success',
      duration: 5000,
      isClosable: true
    })
  }

  return (
    <VStack spacing={6} align='stretch'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.services}>
          <FormLabel
            fontFamily='heading'
            fontSize='lg'
            fontWeight='bold'
            textAlign='left'
            color='blue.800'
            mb={3}
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
                            isSelected && !planSelected ? 'red.500' : 'blue.500'
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
                                        ({plan.price.toLocaleString('sv-SE')} kr
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

                          {planSelected && (
                            <Button
                              size='sm'
                              variant='ghost'
                              colorScheme='red'
                              onClick={() => handleClearPlan(service.title)}
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
              Vänligen välj minst en tjänst
            </Text>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.name} mt={6}>
          <FormLabel
            textAlign='left'
            fontFamily='heading'
            fontWeight='semibold'
          >
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
          <FormLabel
            textAlign='left'
            fontFamily='heading'
            fontWeight='semibold'
          >
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
          <FormLabel
            textAlign='left'
            fontFamily='heading'
            fontWeight='semibold'
          >
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
          <FormLabel
            textAlign='left'
            fontFamily='heading'
            fontWeight='semibold'
          >
            Meddelande{' '}
            <Text as='span' fontSize='xs' color='gray.500' ml={1}>
              (frivilligt)
            </Text>
          </FormLabel>
          <Input
            as='textarea'
            placeholder='Ditt meddelande'
            rows={4}
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
  )
}

export default OrderForm
