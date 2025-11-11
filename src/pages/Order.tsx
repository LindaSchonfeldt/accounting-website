import PageWrapper from '../components/layout/PageWrapper'
import PageSection from '../components/layout/PageSection'
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

        <PageSection>
          <OrderForm />
        </PageSection>
      </PageWrapper>
    </>
  )
}

export default Order
