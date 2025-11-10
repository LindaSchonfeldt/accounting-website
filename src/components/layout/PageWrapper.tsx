import { Box } from '@chakra-ui/react'
import React from 'react'

interface PageWrapperProps {
  children: React.ReactNode
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Box as='main' minH='100vh'>
      {children}
    </Box>
  )
}

export default PageWrapper
