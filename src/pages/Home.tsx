import { Box } from '@chakra-ui/react'

import PageSection from '../components/layout/PageSection'
import PageWrapper from '../components/layout/PageWrapper'
import Meta from '../components/Meta'
import ContactSection from '../components/sections/ContactSection'
import CTASection from '../components/sections/CTASection'
import FAQSection from '../components/sections/FAQSection'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import WhyUsSection from '../components/sections/WhyUsSection'

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
        <PageSection>
          <WhyUsSection />
        </PageSection>
        <FAQSection />
        <CTASection
          heading='Redo att förenkla din bokföring?'
          text='Kom igång på några minuter. Beställ dina tjänster och få personlig, professionell bokföring till ett fast och förutsägbart pris.'
          buttonText='Beställ tjänster'
          buttonLink='/order'
          bgColor='blue.600'
        />
        <PageSection>
          <ContactSection />
        </PageSection>
      </PageWrapper>
    </>
  )
}

export default Home
