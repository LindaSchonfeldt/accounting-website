import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  example: string
  exampleRequired: string
}

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data)

  // Remove or comment out this line in production
  // console.log(watch("example"))

  return (
    // "handleSubmit" will validate your inputs before invoking "onSubmit"
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue='test' {...register('example')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  )
}
