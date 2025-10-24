import { Box } from '@chakra-ui/react'

import About from '../sections/About'
import Contact from '../sections/Contact'
import FAQ from '../sections/FAQ'
import Hero from '../sections/Hero'
import Services from '../sections/Services'

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
    <About />
    <Contact />
  </Box>
)

export default Home
