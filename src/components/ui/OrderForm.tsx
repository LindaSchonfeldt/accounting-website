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
  Button
} from '@chakra-ui/react'
import { services_full } from '../../data/services_full'

interface FormInputs {
  name: string
  email: string
  phone?: string
  message?: string
  services: string[] // Array of selected service names
}

const OrderForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormInputs>({
    defaultValues: {
      services: []
    }
  })

  const selectedServices = watch('services')

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data)
    // Handle form submission (e.g., send to API)
  }

  return (
    <Box
      maxW='600px'
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
            <FormLabel fontWeight='bold'>Välj tjänster</FormLabel>
            <CheckboxGroup
              value={selectedServices}
              onChange={(values) => setValue('services', values as string[])}
            >
              <Stack spacing={3}>
                {services_full.map((service) => (
                  <Checkbox
                    key={service.title}
                    value={service.title}
                    colorScheme='blue'
                  >
                    <Text fontSize='sm'>{service.title}</Text>
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
            <FormErrorMessage>
              {errors.services && errors.services.message}
            </FormErrorMessage>
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
          <Button type='submit' colorScheme='blue' size='lg' w='full' mt={4}>
            Skicka beställning
          </Button>
        </form>
      </VStack>
    </Box>
  )
}

export default OrderForm
