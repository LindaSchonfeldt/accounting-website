import { SubmitHandler, useForm } from 'react-hook-form'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Box,
  VStack,
  Text
} from '@chakra-ui/react'

interface FormInputs {
  name: string
  email: string
  phone?: string
  message?: string
}

const OrderForm: React.FC<FormInputs> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) =>
    console.log(data)

  return (
    <Box maxW='600px' mx='auto' p={6} borderWidth='1px' bg='white'>
      <VStack spacing={4} align='stretch'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*Checkboxes for selecting services would go here*/}

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
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-post</FormLabel>
            <Input
              type='email'
              placeholder='Din e-post'
              {...register('email', { required: 'E-post är obligatoriskt' })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.phone}>
            <FormLabel>
              Telefonnummer{' '}
              <Text as='span' fontSize='xs' color='gray.500' ml={1}>
                (frivilligt)
              </Text>
            </FormLabel>
            <Input
              type='tel'
              placeholder='Din telefonnummer'
              {...register('phone')}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.message}>
            <FormLabel>
              Meddelande{' '}
              <Text as='span' fontSize='xs' color='gray.500' ml={1}>
                (frivilligt)
              </Text>
            </FormLabel>
            <Input
              type='text'
              placeholder='Din meddelande'
              {...register('message', {
                required: 'Meddelande är obligatoriskt'
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
        </form>
      </VStack>
    </Box>
  )
}

export default OrderForm
