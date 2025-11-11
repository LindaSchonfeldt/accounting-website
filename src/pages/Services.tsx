import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Meta from '../components/Meta'
import IntroSection from '../components/sections/IntroSection'
import Dropdown from '../components/ui/Dropdown'
import ServiceCard from '../components/ui/ServiceCard'
import TabMenu from '../components/ui/TabMenu'
import { services_full } from '../data/services_full'
import PageWrapper from '../components/layout/PageWrapper'
import CTASection from '../components/sections/CTASection'

const Services = () => {
  const location = useLocation()
  const tabs = services_full.map((service) => service.title)
  const [defaultIndex, setDefaultIndex] = useState(0)

  // Update tab when hash changes
  useEffect(() => {
    // Always scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Then handle hash for tab selection
    if (location.hash) {
      const hash = location.hash.replace('#', '')
      const tabIndex = parseInt(hash, 10)

      if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < tabs.length) {
        setDefaultIndex(tabIndex)
      }
    }
  }, [location.hash, tabs.length]) // ← This triggers when hash changes

  const introText = useBreakpointValue({
    base: 'Upptäck vårat utbud genom att läsa mer om våra tjänster i menyn nedan.',
    lg: 'Upptäck våra tjänster genom att klicka runt i flikarna nedan.'
  })

  return (
    <>
      <Meta
        title='Våra tjänster - Bokföring, Momsrapport & Årsbokslut'
        description='Professionella redovisningstjänster: Löpande bokföring, momsrapport, årsbokslut, deklaration och rådgivning.'
        keywords='bokföring, momsrapport, årsbokslut, deklaration, redovisning'
        ogUrl='https://billigbokforing.se/tjanster'
      />
      <PageWrapper>
        <IntroSection heading='Tjänster' introText={introText || ''} />

        {/* Services Section */}
        <PageWrapper>
          <Box
            maxW={{ base: '100%', md: 'container.md', lg: 'container.xl' }}
            mx='auto'
            px={{ base: 4, md: 8 }}
            pb={16}
          >
            {/* Dropdown for mobile/tablet view */}
            <Flex
              display={{ base: 'flex', lg: 'none' }}
              mb={6}
              justifyContent={{ base: 'flex-start', md: 'center' }}
            >
              <Dropdown
                label='Välj Tjänst'
                placement='bottom-start'
                size='md'
                width={{ base: '100%', md: '400px' }}
                items={tabs.map((tab, index) => ({
                  label: tab,
                  isActive: index === defaultIndex,
                  onClick: () => {
                    window.location.hash = `#${index}`
                    setDefaultIndex(index)
                  }
                }))}
              />
            </Flex>

            {/* Tabs for desktop view */}
            <Box display={{ base: 'none', lg: 'block' }}>
              <TabMenu
                tabs={tabs}
                index={defaultIndex}
                onChange={(index) => setDefaultIndex(index)}
              >
                {services_full.map((service, index) => (
                  <Box key={index}>
                    <Text mb={6} color='gray.600'>
                      {service.description}
                    </Text>

                    {service.plans && (
                      <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacing={{ base: 2, md: 4 }}
                      >
                        {service.plans.map((plan, planIndex) => (
                          <ServiceCard
                            key={planIndex}
                            name={plan.name}
                            {...('price' in plan ? { price: plan.price } : {})}
                            {...('period' in plan
                              ? {
                                  period: plan.period as
                                    | 'månad'
                                    | 'engång'
                                    | 'ingår'
                                    | 'tillfälle'
                                    | 'år'
                                }
                              : {})}
                            {...('badge' in plan ? { badge: plan.badge } : {})}
                            description={plan.description}
                            {...('features' in plan
                              ? { features: plan.features }
                              : {})}
                            {...('revenue' in plan
                              ? { revenue: plan.revenue }
                              : {})}
                          />
                        ))}
                      </SimpleGrid>
                    )}
                  </Box>
                ))}
              </TabMenu>
            </Box>

            {/* Content for mobile dropdown */}
            <Box display={{ base: 'block', lg: 'none' }}>
              {services_full[defaultIndex] && (
                <Box>
                  <Heading as='h2' size='lg' mb={4}>
                    {services_full[defaultIndex].title}
                  </Heading>
                  <Text mb={6} color='gray.600'>
                    {services_full[defaultIndex].description}
                  </Text>

                  {services_full[defaultIndex].plans && (
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      spacing={{ base: 2, md: 4 }}
                    >
                      {services_full[defaultIndex].plans.map(
                        (plan, planIndex) => (
                          <ServiceCard
                            key={planIndex}
                            name={plan.name}
                            {...('price' in plan ? { price: plan.price } : {})}
                            {...('period' in plan
                              ? {
                                  period: plan.period as
                                    | 'månad'
                                    | 'engång'
                                    | 'ingår'
                                    | 'tillfälle'
                                    | 'år'
                                }
                              : {})}
                            {...('badge' in plan ? { badge: plan.badge } : {})}
                            description={plan.description}
                            {...('features' in plan
                              ? { features: plan.features }
                              : {})}
                            {...('revenue' in plan
                              ? { revenue: plan.revenue }
                              : {})}
                          />
                        )
                      )}
                    </SimpleGrid>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        </PageWrapper>

        <CTASection
          heading=' Redo att komma igång?'
          text='Beställ dina tjänster idag och få professionell bokföring till
                fast pris.'
          buttonText='Beställ nu'
          buttonLink='/bestall'
          bgColor='blue.600'
        />
      </PageWrapper>
    </>
  )
}

export default Services
