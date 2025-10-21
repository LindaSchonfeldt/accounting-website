import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
      id='hero'
      className='container-lg py-16 text-center animate-fade-in'
    >
      <h1 className='text-gradient mb-6'>
        Din personliga och kostnadseffektiva redovisningskonsult
      </h1>
      <p className='text-xl text-secondary-600 mb-8 max-w-2xl mx-auto'>
        Här kommer ditt största argument för att anlita dig stå.
      </p>
      <Link to='/styling' className='btn btn-primary btn-lg'>
        Få kostnadsfri offert
      </Link>
    </section>
  )
}

export default Hero
