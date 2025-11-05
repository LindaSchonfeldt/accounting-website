import { Box, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import { desktopNavItems } from '../../data/navItems'

const DesktopMenu = () => {
  return (
    <Flex
      as='ul'
      alignItems='center'
      gap={4}
      h='full'
      listStyleType='none'
      display={{ base: 'none', md: 'flex' }}
    >
      {desktopNavItems.map((item) => (
        <Box as='li' key={item.to}>
          <Link
            as={RouterLink}
            to={item.to}
            color='gray.600'
            _hover={{ color: 'blue.600' }}
            transition='color 0.2s'
            display='flex'
            alignItems='center'
            h='full'
            fontSize='sm'
            px={2}
            py={1}
          >
            {item.label}
          </Link>
        </Box>
      ))}
    </Flex>
  )
}

export default DesktopMenu
