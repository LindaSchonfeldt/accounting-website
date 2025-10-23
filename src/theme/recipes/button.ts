import { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'md'
  },
  variants: {
    primary: {
      bg: 'blue.600',
      color: 'white',
      _hover: { bg: 'blue.700' }
    },
    secondary: {
      bg: 'gray.100',
      color: 'blue.600',
      _hover: { bg: 'gray.200' }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
}
