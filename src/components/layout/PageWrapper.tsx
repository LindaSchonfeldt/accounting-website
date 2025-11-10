import { Box } from '@chakra-ui/react'
import React from 'react'

interface PageWrapperProps {
  children: React.ReactNode
  maxW?: string
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  maxW = 'container.xl'
}) => {
  return (
    <Box as='main' minH='100vh' role='main' maxW={maxW}>
      {children}
    </Box>
  )
}

export default PageWrapper
