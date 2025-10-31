import { ComponentStyleConfig } from '@chakra-ui/react'

export const Tabs: ComponentStyleConfig = {
  variants: {
    enclosedColored: {
      tab: {
        _selected: { color: 'white', bg: 'blue.600' },
        fontWeight: 'bold',
        fontSize: 'lg',
        px: 6
      },
      tablist: {
        borderBottom: '2px solid',
        borderColor: 'blue.200',
        mb: -1
      }
    }
  }
}
