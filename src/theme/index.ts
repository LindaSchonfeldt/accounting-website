import { extendTheme } from '@chakra-ui/react'

import { Button } from './recipes/button'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        h1: {
          color: 'blue.800'
        },
        h2: {
          color: 'blue.800'
        },
        h3: {
          color: 'blue.800'
        },
        p: {
          color: 'gray.600'
        },
        a: {
          color: 'blue.500'
        }
      },
      html: {
        scrollBehavior: 'smooth'
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
  semanticTokens: {
    colors: {
      'text-primary': '#1f2937',
      'text-secondary': '#4b5563',
      'text-tertiary': '#fffff9',
      'text-link': '#0078ff',
      'bg-primary': '#ffffff',
      'bg-secondary': '#f3f4f6',
      'border-primary': '#e5e7eb',
      'border-secondary': '#d1d5db'
    }
  },
  components: {
    Button
  }
})

export default theme
