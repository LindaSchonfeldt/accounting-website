import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DesktopMenu from './DesktopMenu'
import HamburgerIcon from '../ui/HamburgerIcon'
import MobileMenu from './MobileMenu'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isMenuOpen, closeMenu])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <Box
      as='header'
      position='sticky'
      top={0}
      zIndex={100}
      bg='white'
      boxShadow='sm'
    >
      <Container maxW='container.lg' py={1}>
        <Flex
          as='nav'
          align='center'
          justify='space-between'
          h={14}
          aria-label='Main navigation'
        >
          <Heading
            as='h1'
            size='lg'
            display='flex'
            alignItems='center'
            h='full'
          >
            <Link
              href='/'
              color='blue.800'
              fontSize='2xl'
              fontWeight='bold'
              display='flex'
              alignItems='center'
              h='full'
              _hover={{ textDecoration: 'none' }}
              aria-label='Go to home page'
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
              }}
            >
              Billig Bokföring
            </Link>
          </Heading>

          <DesktopMenu />

          {/* Mobile Hamburger Button */}
          <IconButton
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMenu}
            display={{ base: 'flex', md: 'none' }}
            variant='unstyled'
            zIndex={101}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </IconButton>
        </Flex>
      </Container>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </Box>
  )
}

export default Nav
