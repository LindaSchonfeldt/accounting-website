import { Box } from '@chakra-ui/react'
import Hero from '../sections/Hero.jsx'
import Services from '../sections/Services.jsx'
import Contact from '../sections/Contact.jsx'
import FAQ from '../sections/FAQ.jsx'

const Home = () => (
  <Box
    as='main'
    minH='100vh'
    bgGradient='linear(to-br, blue.50, gray.50)'
    role='main'
  >
    <Hero />
    <Services />
    <FAQ />
    <Contact />
  </Box>
)

export default Home
