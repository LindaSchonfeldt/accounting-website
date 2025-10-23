import { Box } from '@chakra-ui/react'

import Contact from '../sections/Contact.jsx'
import FAQ from '../sections/FAQ.jsx'
import Hero from '../sections/Hero.jsx'
import Services from '../sections/Services.jsx'

const Home = () => (
  <Box
    as='main'
    minH='100vh'
    bgGradient='linear(to-br, blue.50, gray.50)'
    role='main'
    py={{ base: 1, md: 1, lg: 1 }} // Vertical padding
    px={{ base: 4, md: 6, lg: 8 }} // Horizontal padding
    mb={{ base: 4, md: 6, lg: 8 }} // Margin bottom
  >
    <Hero />
    <Services />
    <FAQ />
    <Contact />
  </Box>
)

export default Home
