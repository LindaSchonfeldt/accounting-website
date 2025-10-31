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
    },
    outline: {
      border: '2px solid',
      borderColor: 'blue.600',
      color: 'blue.600',
      bg: 'transparent',
      _hover: { bg: 'blue.50' }
    },
    ghost: {
      bg: 'transparent',
      color: 'blue.600',
      _hover: { bg: 'blue.50' }
    },
    link: {
      color: 'blue.600',
      _hover: { textDecoration: 'underline' }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
}
