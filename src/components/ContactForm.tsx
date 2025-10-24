import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ContactFormProps {}

enum ContactReason {
  CONTACT = 'Kontakt',
  SALES = 'Sales',
  FEEDBACK = 'Feedback'
}
interface FormInputs {
  contactReason?: ContactReason
  name: string
  email: string
  phone?: string
  message: string
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>()
  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) =>
    console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align='stretch'>
        <FormControl isInvalid={!!errors.contactReason} mb={4}>
          <FormLabel>Kontaktorsak (valfritt)</FormLabel>
          <Select
            placeholder='Välj kontaktorsak'
            {...register('contactReason')}
          >
            {Object.values(ContactReason).map((reason: string) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors.contactReason && errors.contactReason.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.name} mb={4}>
          <FormLabel>Namn*</FormLabel>
          <Input
            placeholder='Namn'
            {...register('name', { required: 'Namn är obligatoriskt' })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb={4}>
          <FormLabel>E-post*</FormLabel>
          <Input
            placeholder='E-post'
            {...register('email', { required: 'E-post är obligatoriskt' })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Telefonnummer</FormLabel>
          <Input placeholder='Telefonnummer' {...register('phone')} />
        </FormControl>

        <FormControl isInvalid={!!errors.message} mb={4}>
          <FormLabel>Meddelande*</FormLabel>
          <Textarea
            placeholder='Meddelande'
            {...register('message', {
              required: 'Meddelande är obligatoriskt'
            })}
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>

        <Button type='submit'>Skicka</Button>
      </VStack>
    </form>
  )
}

export default ContactForm
