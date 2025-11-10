import { Box, Text } from '@chakra-ui/react'

import PageSection from '../components/layout/PageSection'
import PageWrapper from '../components/layout/PageWrapper'
import Meta from '../components/Meta'
import IntroSection from '../components/sections/IntroSection'
import CustomAccordion from '../components/ui/CustomAccordion'
import { faqs } from '../data/faqs'

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

          <Text mt={8} fontSize='md' color='gray.600' textAlign='center'>
            Har du fler frågor? Tveka inte att{' '}
            <a
              href='/kontakt'
              style={{ color: '#3182CE', textDecoration: 'underline' }}
            >
              kontakta oss
            </a>
            !
          </Text>
        </PageSection>
      </PageWrapper>
    </>
  )
}

export default FAQ
