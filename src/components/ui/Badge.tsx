import { Badge as ChakraBadge, BadgeProps } from '@chakra-ui/react'

interface CustomBadgeProps extends BadgeProps {
  children: React.ReactNode
  variant?: 'solid' | 'subtle' | 'outline'
  colorScheme?: string
}

const Badge: React.FC<CustomBadgeProps> = ({
  children,
  variant = 'subtle',
  colorScheme = 'green',
  ...props
}) => {
  return (
    <ChakraBadge
      variant={variant}
      colorScheme={colorScheme}
      fontSize='sm'
      fontWeight='semibold'
      fontFamily='Inter, sans-serif'
      px={2}
      py={1}
      borderRadius='md'
      textTransform='none' // ← Add this to prevent uppercase
      {...props}
    >
      {children}
    </ChakraBadge>
  )
}

export default Badge
