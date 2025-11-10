import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

import PageWrapper from '../components/layout/PageWrapper'
import Meta from '../components/Meta'
import IntroSection from '../components/sections/IntroSection'
import OrderForm from '../components/ui/OrderForm'

const Order = () => {
  return (
    <>
      <Meta
        title='Beställ tjänster - Billig Bokföring'
        description='Beställ bokföring, momsrapport eller årsbokslut. Enkel beställningsprocess med transparenta priser.'
        keywords='beställa bokföring, bokföring online, redovisningstjänster, momsrapport, årsbokslut'
        ogUrl='https://billigbokforing.se/bestall'
      />

      <PageWrapper>
        <IntroSection
          heading='Beställ tjänster'
          introText='Välj de bokföringstjänster som passar ditt företag bäst och skicka en beställning. Vi bekräftar inom 24 timmar.'
          highlightedText='Beställ löpande bokföring och få 10 % rabatt på tilläggstjänster.'
        />

        <Container
          maxW='container.md'
          py={{ base: 8, md: 12, lg: 16 }}
          px={{ base: 4, md: 6 }}
        >
          <OrderForm />
        </Container>
      </PageWrapper>
    </>
  )
}

export default Order
