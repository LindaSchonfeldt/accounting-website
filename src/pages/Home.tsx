import { Box } from '@chakra-ui/react'

import Meta from '../components/Meta'
import ContactSection from '../components/sections/ContactSection'
import FAQSection from '../components/sections/FAQSection'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'

const Home = () => {
  return (
    <>
      <Meta
        title='Billig Bokföring - Din personliga redovisningskonsult'
        description='Kostnadseffektiv bokföring och redovisning för småföretag. Löpande bokföring från 295 kr/mån.'
        keywords='bokföring, redovisning, småföretag, bokföringsbyrå, ekonomi'
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
