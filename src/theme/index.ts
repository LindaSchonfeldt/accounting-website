import { extendTheme } from '@chakra-ui/react'

import { Button } from './recipes/button'
import { Tabs } from './recipes/tabs'

const theme = extendTheme({
  semanticTokens: {
    colors: {
      'bg-footer': 'blue.800',
      'text-footer': 'white',
      'text-footer-muted': 'whiteAlpha.800'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.700'
      },
      html: {
        scrollBehavior: 'smooth'
      },
      // Use CSS selectors instead of nested objects
      'h1, h2, h3, h4, h5, h6': {
        color: 'blue.800'
      },
      h1: {
        fontWeight: 800
      },
      h2: {
        fontWeight: 600
      },
      'h3, h4, h5, h6': {
        fontWeight: 500
      },
      p: {
        color: 'gray.600'
      },
      a: {
        color: 'blue.500',
        _hover: {
          textDecoration: 'underline'
        }
      }
    }
  },
  colors: {
    blue: {
      50: '#e3f2ff',
      100: '#b3daff',
      200: '#83c2ff',
      300: '#52aaff',
      400: '#2292ff',
      500: '#0078ff',
      600: '#0061cc',
      700: '#004a99',
      800: '#003366',
      900: '#001c33'
    },
    orange: {
      50: '#fff4e5',
      100: '#ffd9b3',
      200: '#ffb383',
      300: '#ff8c52',
      400: '#ff6622',
      500: '#ff4000',
      600: '#cc3200',
      700: '#992400',
      800: '#661600',
      900: '#330800'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#11121b'
    }
  },
  fonts: {
    heading: `'Besley', serif`,
    body: `'Inter', sans-serif`
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  components: {
    Button,
    Tabs
  }
})

export default theme
