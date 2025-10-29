import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Meta from '../components/Meta'
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

  return (
    <>
      <Meta
        title='Tjänster - Billig Bokföring'
        description='Upptäck våra kostnadseffektiva bokföringstjänster för småföretag.'
      />
      <Box as='main' minH='100vh' role='main' p={8}>
        <Heading as='h1' size='xl' py={16} mb={4} textAlign='center'>
          Våra Tjänster
        </Heading>
        <Box maxW='container.xl' mx='auto' px={4} pb={16}>
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
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
                    {service.plans.map((plan, planIndex) => (
                      <Box
                        key={planIndex}
                        p={6}
                        borderWidth='1px'
                        borderRadius='lg'
                        boxShadow='md'
                        bg='white'
                      >
                        <Heading as='h3' size='md' mb={2}>
                          {plan.name}
                        </Heading>
                        <Text
                          fontSize='2xl'
                          fontWeight='bold'
                          color='blue.600'
                          mb={2}
                        >
                          {plan.price} kr/mån
                        </Text>
                        {plan.revenue && (
                          <Text fontSize='sm' color='gray.500' mb={3}>
                            Omsättning: {plan.revenue}
                          </Text>
                        )}
                        <Text mb={4} fontSize='sm'>
                          {plan.description}
                        </Text>
                        {plan.features && (
                          <Box as='ul' pl={5}>
                            {plan.features.map((feature, featureIndex) => (
                              <Text
                                as='li'
                                key={featureIndex}
                                fontSize='sm'
                                mb={2}
                              >
                                {feature}
                              </Text>
                            ))}
                          </Box>
                        )}
                      </Box>
                    ))}
                  </SimpleGrid>
                )}
              </Box>
            ))}
          </TabMenu>
        </Box>
      </Box>
    </>
  )
}

export default Services
