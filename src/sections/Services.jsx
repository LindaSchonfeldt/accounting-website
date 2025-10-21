const Services = () => {
  return (
    <section id='services' className='py-16 bg-white'>
      <div className='container-md'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gradient'>
          Våra Tjänster
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='p-6 border rounded-lg hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold mb-4'>Bokföring</h3>
            <p className='text-secondary-600'>
              Vi hanterar din bokföring noggrant och effektivt, så att du kan
              fokusera på din verksamhet.
            </p>
          </div>
          <div className='p-6 border rounded-lg hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold mb-4'>Skatterådgivning</h3>
            <p className='text-secondary-600'>
              Få expertråd för att optimera din skattesituation och säkerställa
              efterlevnad.
            </p>
          </div>
          <div className='p-6 border rounded-lg hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold mb-4'>Lönehantering</h3>
            <p className='text-secondary-600'>
              Vi sköter hela löneprocessen, från beräkning till utbetalning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
