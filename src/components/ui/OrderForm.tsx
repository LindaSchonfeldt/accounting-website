import { Box, Text } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormInputs {
  name: string
  email: string
  phone?: string
  message: string
}

const OrderForm: React.FC<FormInputs> = () => {
  return (
    <Box maxW='600px' mx='auto' p={6} borderWidth='1px' bg='white'>
      <Text>Order form will be implemented here.</Text>
    </Box>
  )
}

export default OrderForm
