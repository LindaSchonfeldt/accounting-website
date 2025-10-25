import { Box } from '@chakra-ui/react'

import About from '../sections/About'
import Contact from '../sections/Contact'
import FAQ from '../sections/FAQ'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Meta from '../components/ui/Meta'

const Home = () => {
  return (
    <>
      <Meta
        title='Billig Bokföring - Kostnadseffektiv redovisning'
        description='Professionell bokföring för småföretag. Fast pris, personlig service och byråpartner hos Fortnox.'
      />
      <Box
        as='main'
        minH='100vh'
        bgGradient='linear(to-br, blue.50, gray.50)'
        role='main'
      >
        <Box id='hero'>
          <Hero />
        </Box>
        <Box id='tjanster'>
          <Services />
        </Box>
        <Box id='vanligafragor'>
          <FAQ />
        </Box>
        <Box id='omoss'>
          <About />
        </Box>
        <Box id='kontakt'>
          <Contact />
        </Box>
      </Box>
    </>
  )
}

export default Home
