import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Portal,
  Text,
  VStack
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import HamburgerIcon from './HamburgerIcon'
import PropTypes from 'prop-types'

// Smooth scroll handler with cross-page navigation
const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string,
  navigate: ReturnType<typeof useNavigate>,
  location: ReturnType<typeof useLocation>
) => {
  e.preventDefault()

  // If not on home page, navigate to home first
  if (location.pathname !== '/') {
    navigate('/')
    setTimeout(() => {
      const element = document.querySelector(targetId)
      if (element) {
        const navHeight = 60
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  } else {
    // Already on home page, just scroll
    const element = document.querySelector(targetId)
    if (element) {
      const navHeight = 60
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}

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
        top='0'
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
          maxWidth='300px'
          height='100vh'
          bg='white'
          pt='70px'
          px={6}
          onClick={(e) => e.stopPropagation()}
        >
          <Text fontSize='lg' fontWeight='bold' mb={6}>
            Meny
          </Text>
          <VStack spacing={6} align='stretch'>
            <Link
              href='#tjanster'
              color='gray.600'
              _hover={{ color: 'blue.600' }}
              transition='color 0.2s'
              onClick={(e) => {
                handleSmoothScroll(e, '#tjanster', navigate, location)
                onClose()
              }}
              fontSize='lg'
            >
              Tjänster
            </Link>
            <Link
              href='#vanligafragor'
              color='gray.600'
              _hover={{ color: 'blue.600' }}
              transition='color 0.2s'
              onClick={(e) => {
                handleSmoothScroll(e, '#vanligafragor', navigate, location)
                onClose()
              }}
              fontSize='lg'
            >
              Vanliga frågor
            </Link>
            <Link
              href='#kontakt'
              color='gray.600'
              _hover={{ color: 'blue.600' }}
              transition='color 0.2s'
              onClick={(e) => {
                handleSmoothScroll(e, '#kontakt', navigate, location)
                onClose()
              }}
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

  // Use useCallback to memoize functions
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
      py={{ base: 1, md: 1, lg: 1 }}
      px={{ base: 0, md: 6, lg: 8 }}
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
              color='blue.600'
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
                href='#tjanster'
                color='gray.600'
                _hover={{ color: 'blue.600' }}
                transition='color 0.2s'
                display='flex'
                alignItems='center'
                h='full'
                onClick={(e) =>
                  handleSmoothScroll(e, '#tjanster', navigate, location)
                }
              >
                Tjänster
              </Link>
            </Box>
            <Box as='li'>
              <Link
                href='#vanligafragor'
                color='gray.600'
                _hover={{ color: 'blue.600' }}
                transition='color 0.2s'
                display='flex'
                alignItems='center'
                h='full'
                onClick={(e) =>
                  handleSmoothScroll(e, '#vanligafragor', navigate, location)
                }
              >
                Vanliga frågor
              </Link>
            </Box>
            <Box as='li'>
              <Link
                href='#kontakt'
                color='gray.600'
                _hover={{ color: 'blue.600' }}
                transition='color 0.2s'
                display='flex'
                alignItems='center'
                h='full'
                onClick={(e) =>
                  handleSmoothScroll(e, '#kontakt', navigate, location)
                }
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
