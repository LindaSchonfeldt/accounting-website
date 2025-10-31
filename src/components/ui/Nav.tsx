import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Portal,
  VStack
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'

import { handleSmoothScroll } from '../../utils/navigation'
import HamburgerIcon from './HamburgerIcon'

// Mobile menu component
interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigate: ReturnType<typeof useNavigate>
  location: ReturnType<typeof useLocation>
}

const MobileMenu = ({
  isOpen,
  onClose,
  navigate,
  location
}: MobileMenuProps) => {
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
            <Link
              as={RouterLink}
              to='/tjanster'
              color='gray.600'
              _hover={{ color: 'blue.600' }}
              transition='color 0.2s'
              fontSize='lg'
            >
              Tjänster
            </Link>
            <Link
              as={RouterLink}
              to='/om-oss'
              color='gray.600'
              _hover={{ color: 'blue.600' }}
              transition='color 0.2s'
              fontSize='lg'
            >
              Om oss
            </Link>
            <Link
              as={RouterLink}
              to='/kontakt'
              color='gray.600'
              _hover={{ color: 'blue.600' }}
              transition='color 0.2s'
              fontSize='lg'
            >
              Kontakt
            </Link>
          </VStack>
        </Box>
      </Box>
    </Portal>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

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
              aria-label='Go to top'
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Billig Bokföring
            </Link>
          </Heading>

          {/* Desktop Navigation */}
          <Flex
            as='ul'
            alignItems='center'
            gap={4}
            h='full'
            listStyleType='none'
            display={{ base: 'none', md: 'flex' }}
          >
            <Box as='li'>
              <Link
                as={RouterLink}
                to='/tjanster'
                color='gray.600'
                _hover={{ color: 'blue.600' }}
                transition='color 0.2s'
                display='flex'
                alignItems='center'
                h='full'
                fontSize='sm' // ← Make text smaller
                px={2} // ← Optional: reduce horizontal padding
                py={1} // ← Optional: reduce vertical padding
              >
                Tjänster
              </Link>
            </Box>
            <Box as='li'>
              <Link
                as={RouterLink}
                to='/om-oss'
                color='gray.600'
                _hover={{ color: 'blue.600' }}
                transition='color 0.2s'
                display='flex'
                alignItems='center'
                h='full'
                fontSize='sm' // ← Make text smaller
                px={2} // ← Optional: reduce horizontal padding
                py={1} // ← Optional: reduce vertical padding
              >
                Om oss
              </Link>
            </Box>
            <Box as='li'>
              <Link
                as={RouterLink}
                to='/kontakt'
                color='gray.600'
                _hover={{ color: 'blue.600' }}
                transition='color 0.2s'
                display='flex'
                alignItems='center'
                h='full'
                fontSize='sm'
                px={2} // ← Optional: reduce horizontal padding
                py={1} // ← Optional: reduce vertical padding
              >
                Kontakt
              </Link>
            </Box>
          </Flex>

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

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navigate={navigate}
        location={location}
      />
    </Box>
  )
}

export default Nav
