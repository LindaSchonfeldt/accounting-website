import { SubmitHandler, useForm } from 'react-hook-form'

interface ContactFormProps {}

enum ContactReason {
  SUPPORT = 'Support',
  SALES = 'Sales',
  FEEDBACK = 'Feedback'
}
interface FormInputs {
  contactReason?: ContactReason
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputs>()
  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) =>
    console.log(data)

  // Remove or comment out this line in production
  // console.log(watch("example"))

  return (
    // "handleSubmit" will validate your inputs before invoking "onSubmit"
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue='Kontaktorsak' {...register('contactReason')} />
      <input
        defaultValue='Förnamn'
        {...register('firstName', { required: 'Förnamn är obligatoriskt' })}
      />
      {errors.firstName && <span>{errors.firstName.message}</span>}
      <input
        defaultValue='Efternamn'
        {...register('lastName', { required: 'Efternamn är obligatoriskt' })}
      />
      {errors.lastName && <span>{errors.lastName.message}</span>}
      <input defaultValue='E-post' {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <input defaultValue='Telefonnummer' {...register('phone')} />
      <textarea defaultValue='Meddelande' {...register('message')} />

      <input type='submit' />
    </form>
  )
}

export default ContactForm
