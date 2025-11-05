import { Box, VStack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormInputs {
  name: string
  email: string
  phone?: string
  message: string
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
        {/* Form implementation goes here */}
        <form onSubmit={handleSubmit(onSubmit)}>{/* Form fields */}</form>
      </VStack>
    </Box>
  )
}

export default OrderForm
