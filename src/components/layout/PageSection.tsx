import { Container } from '@chakra-ui/react'
import React from 'react'

interface PageSectionProps {
  children: React.ReactNode
  maxW?: string
  py?: object | number
  px?: object | number
}

const PageSection: React.FC<PageSectionProps> = ({
  children,
  maxW = 'container.xl',
  py = { base: 8, md: 12, lg: 16 },
  px = { base: 4, md: 6 }
}) => {
  return (
    <Container
      maxW={maxW}
      py={py}
      px={px}
      textAlign={{ base: 'left', md: 'center' }}
    >
      {children}
    </Container>
  )
}

export default PageSection
