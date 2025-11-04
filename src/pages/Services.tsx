import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Meta from '../components/Meta'
import Dropdown from '../components/ui/Dropdown'
import ServiceCard from '../components/ui/ServiceCard'
import TabMenu from '../components/ui/TabMenu'
import { services_full } from '../data/services_full'

const Services = () => {
  const location = useLocation()
  const tabs = services_full.map((service) => service.title)
  const [defaultIndex, setDefaultIndex] = useState(0)

  // Set active tab from URL hash on mount
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    const tabIndex = parseInt(hash, 10)

    if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < tabs.length) {
      setDefaultIndex(tabIndex)
    }
  }, [location.hash, tabs.length])

  const introText = useBreakpointValue({
    base: 'Upptäck vårat utbud genom att läsa mer om våra tjänster i menyn nedan.',
    lg: 'Upptäck våra tjänster genom att klicka runt i flikarna nedan.'
  })

  return (
    <>
      <Meta
        title='Tjänster - Billig Bokföring'
        description='Upptäck våra kostnadseffektiva bokföringstjänster för småföretag.'
      />
      <Box as='main' minH='100vh' role='main' p={{ base: 0, md: 4 }}>
        <Heading
          as='h1'
          size='xl'
          pt={8}
          ml={4}
          mb={4}
          textAlign={{ base: 'left', md: 'center' }}
        >
          Våra Tjänster
        </Heading>
        <Text
          textAlign={{ base: 'left', md: 'center' }}
          color='gray.600'
          size='lg'
          mt={4}
          mb={8}
          ml={4}
          mr={4}
        >
          {introText}
        </Text>
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
            <TabMenu tabs={tabs} defaultIndex={defaultIndex}>
              {services_full.map((service, index) => (
                <Box key={index}>
                  <Heading as='h2' size='lg' mb={4}>
                    {service.title}
                  </Heading>
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
      </Box>
    </>
  )
}

export default Services
