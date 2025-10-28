import { Box } from '@chakra-ui/react'

import Meta from '../components/Meta'
import ContactSection from '../sections/ContactSection'
import FAQSection from '../sections/FAQSection'
import HeroSection from '../sections/HeroSection'
import ServicesSection from '../sections/ServicesSection'

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
          <HeroSection />
        </Box>
        <Box id='tjanster'>
          <ServicesSection />
        </Box>
        <Box id='vanligafragor'>
          <FAQSection />
        </Box>
        <Box id='kontakt'>
          <ContactSection />
        </Box>
      </Box>
    </>
  )
}

export default Home
