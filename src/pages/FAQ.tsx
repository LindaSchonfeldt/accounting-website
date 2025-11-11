import { Text } from '@chakra-ui/react'

import PageSection from '../components/layout/PageSection'
import PageWrapper from '../components/layout/PageWrapper'
import Meta from '../components/Meta'
import IntroSection from '../components/sections/IntroSection'
import CustomAccordion from '../components/ui/CustomAccordion'
import { faqs } from '../data/faqs'
import CTASection from '../components/sections/CTASection'

const FAQ = () => {
  return (
    <>
      <Meta
        title='Vanliga frågor - Billig Bokföring'
        description='Här hittar du svar på de vanligaste frågorna om våra tjänster, priser och processer.'
        keywords='vanliga frågor bokföring, FAQ bokföringsbyrå, bokföringstjänster frågor, priser bokföring'
        ogUrl='https://billigbokforing.se/vanliga-fragor'
      />
      <PageWrapper>
        <IntroSection
          heading='Vanliga frågor'
          introText='Här hittar du svar på de vanligaste frågorna om våra bokföringstjänster, priser och processer.'
        />
        <PageSection>
          <CustomAccordion faqs={faqs} />
        </PageSection>

        <CTASection
          heading='Har du fler frågor?'
          text='Tveka inte att kontakta oss för mer information eller hjälp.'
          buttonText='Kontakta oss'
          buttonLink='/kontakt'
          bgColor='blue.700'
        />
      </PageWrapper>
    </>
  )
}

export default FAQ
