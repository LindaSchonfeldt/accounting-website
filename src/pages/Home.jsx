import Hero from '../sections/Hero.jsx'
import Services from '../sections/Services.jsx'
import Contact from '../sections/Contact.jsx'
import FAQ from '../sections/FAQ.jsx'

const Home = () => (
  <main className='container-lg py-16' role='main'>
    <Hero />
    <Services />
    <FAQ />
    <Contact />
  </main>
)

export default Home
