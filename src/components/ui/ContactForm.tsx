import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'

interface ContactFormProps {
  showContactReason?: boolean
}

enum ContactReason {
  QUESTION = 'Fråga',
  ORDER = 'Beställning',
  SUPPORT = 'Support',
  OTHER = 'Annat'
}

interface FormInputs {
  contactReason?: ContactReason
  name: string
  email: string
  phone?: string
  message: string
}

const ContactForm: React.FC<ContactFormProps> = ({
  showContactReason = true
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormInputs>()

  const toast = useToast()

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Ej angivet',
      contact_reason: data.contactReason || 'Ej vald',
      message: data.message
    }

    try {
      const response = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ templateParams })
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      toast({
        title: 'Meddelande skickat!',
        description: 'Vi återkommer så snart som möjligt.',
        status: 'success',
        duration: 5000,
        isClosable: true
      })

      reset()
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Något gick fel',
        description: 'Kunde inte skicka meddelandet. Försök igen.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align='stretch'>
        {showContactReason && (
          <FormControl isInvalid={!!errors.contactReason} mb={4}>
            <FormLabel>
              Kontaktorsak
              <Text as='span' fontSize='xs' color='gray.500' ml={1}>
                (frivilligt)
              </Text>
            </FormLabel>
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
        )}

        <FormControl isInvalid={!!errors.name} mb={4}>
          <FormLabel>Namn</FormLabel>
          <Input
            placeholder='Ditt namn'
            {...register('name', { required: 'Namn är obligatoriskt' })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb={4}>
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

        <FormControl mb={4}>
          <FormLabel>
            Telefonnummer
            <Text as='span' fontSize='xs' color='gray.500' ml={1}>
              (frivilligt)
            </Text>
          </FormLabel>
          <Input placeholder='Ditt telefonnummer' {...register('phone')} />
        </FormControl>

        <FormControl isInvalid={!!errors.message} mb={4}>
          <FormLabel>Meddelande</FormLabel>
          <Textarea
            placeholder='Ditt meddelande'
            minH='120px'
            resize='vertical'
            {...register('message', {
              required: 'Meddelande är obligatoriskt'
            })}
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          type='submit'
          colorScheme='blue'
          size='lg'
          w='full'
          isLoading={isSubmitting}
          loadingText='Skickar...'
        >
          Skicka
        </Button>
      </VStack>
    </form>
  )
}

export default ContactForm
