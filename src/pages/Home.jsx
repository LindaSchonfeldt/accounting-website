import Hero from '../sections/Hero.jsx'
import Services from '../sections/Services.jsx'
import Contact from '../sections/Contact.jsx'
import FAQ from '../sections/FAQ.jsx'

const Home = () => (
  <div className='min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50'>
    <main className='container-lg py-16'>
      <Hero />
      <Services />
      <Contact />
      <FAQ />
    </main>
  </div>
)

export default Home
