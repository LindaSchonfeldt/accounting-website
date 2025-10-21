import Accordion from '../components/Accordion'

const FAQ = () => {
  return (
    <section id='faq' className='py-16 bg-white'>
      <div className='container-md text-center'>
        <h2 className='text-3xl font-bold mb-6 text-gradient'>
          Vanliga Frågor
        </h2>
        <p className='text-xl text-secondary-600 mb-8 max-w-2xl mx-auto'>
          Här besvarar vi några av de vanligaste frågorna våra kunder har.
        </p>
        <Accordion />
      </div>
    </section>
  )
}

export default FAQ
