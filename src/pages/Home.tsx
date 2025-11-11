import { Box } from '@chakra-ui/react'
import PageSection from '../components/layout/PageSection'

import Meta from '../components/Meta'
import ContactSection from '../components/sections/ContactSection'
import FAQSection from '../components/sections/FAQSection'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import CTASection from '../components/sections/CTASection'
import PageWrapper from '../components/layout/PageWrapper'

const Home = () => {
  return (
    <>
      <Meta
        title='Billig Bokföring - Din personliga redovisningskonsult'
        description='Kostnadseffektiv bokföring och redovisning för småföretag. Löpande bokföring från 295 kr/mån.'
        keywords='bokföring, redovisning, småföretag, bokföringsbyrå, ekonomi'
        ogUrl='https://billigbokforing.se/'
      />
      <PageWrapper>
        <Box>
          <HeroSection />
        </Box>
        <PageSection>
          <ServicesSection />
        </PageSection>
        <FAQSection />

        <PageSection>
          <ContactSection />
        </PageSection>
        <CTASection
          heading='Redo att komma igång?'
          text='Beställ dina tjänster idag och få professionell bokföring till fast pris.'
          buttonText='Beställ nu'
          buttonLink='/order'
          bgColor='blue.600'
        />
      </PageWrapper>
    </>
  )
}

export default Home
