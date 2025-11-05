import { Box, Link, Portal, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import { navItems } from '../../data/navItems'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null

  return (
    <Portal>
      <Box
        position='fixed'
        top='30px'
        left='0'
        right='0'
        bottom='0'
        zIndex={90}
        onClick={onClose}
      >
        <Box
          position='absolute'
          top='0'
          left='0'
          right='0'
          bottom='0'
          bg='blackAlpha.600'
        />
        <Box
          position='absolute'
          top='0'
          right='0'
          width='100%'
          maxWidth='500px'
          height='auto'
          maxHeight='100vh'
          bg='white'
          pt='70px'
          px={6}
          overflowY='auto'
          onClick={(e) => e.stopPropagation()}
        >
          <VStack spacing={6} align='stretch' pb={8}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                as={RouterLink}
                to={item.to}
                color='gray.600'
                _hover={{ color: 'blue.600' }}
                transition='color 0.2s'
                fontSize='lg'
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </VStack>
        </Box>
      </Box>
    </Portal>
  )
}

export default MobileMenu
