import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  VStack
} from '@chakra-ui/react'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot
} from '@chakra-ui/react'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const NavLinks = () => (
    <>
      <Link
        href='#services'
        color='gray.600'
        _hover={{ color: 'blue.600' }}
        transition='color 0.2s'
        onClick={onClose}
        fontSize='lg'
      >
        Tjänster
      </Link>
      <Link
        href='#faq'
        color='gray.600'
        _hover={{ color: 'blue.600' }}
        transition='color 0.2s'
        onClick={onClose}
        fontSize='lg'
      >
        Vanliga frågor
      </Link>
      <Link
        href='#contact'
        color='gray.600'
        _hover={{ color: 'blue.600' }}
        transition='color 0.2s'
        onClick={onClose}
        fontSize='lg'
      >
        Kontakt
      </Link>
    </>
  )

  return (
    <>
      <Box
        as='header'
        position='sticky'
        top={0}
        zIndex={100} // Higher z-index for nav
        bg='white'
        boxShadow='sm'
        py={{ base: 1, md: 1, lg: 1 }}
        px={{ base: 4, md: 6, lg: 8 }}
        mb={{ base: 4, md: 6, lg: 8 }}
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
                href='#hero'
                color='blue.600'
                fontSize='2xl'
                fontWeight='bold'
                display='flex'
                alignItems='center'
                h='full'
                _hover={{ textDecoration: 'none' }}
                aria-label='Go to top'
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
                  href='#services'
                  color='gray.600'
                  _hover={{ color: 'blue.600' }}
                  transition='color 0.2s'
                  display='flex'
                  alignItems='center'
                  h='full'
                >
                  Tjänster
                </Link>
              </Box>
              <Box as='li'>
                <Link
                  href='#faq'
                  color='gray.600'
                  _hover={{ color: 'blue.600' }}
                  transition='color 0.2s'
                  display='flex'
                  alignItems='center'
                  h='full'
                >
                  Vanliga frågor
                </Link>
              </Box>
              <Box as='li'>
                <Link
                  href='#contact'
                  color='gray.600'
                  _hover={{ color: 'blue.600' }}
                  transition='color 0.2s'
                  display='flex'
                  alignItems='center'
                  h='full'
                >
                  Kontakt
                </Link>
              </Box>
            </Flex>

            {/* Mobile Hamburger Button */}
            <IconButton
              aria-label='Open menu'
              onClick={onOpen}
              display={{ base: 'flex', md: 'none' }}
              variant='ghost'
            >
              <Box position='relative' w='24px' h='18px'>
                <Box
                  position='absolute'
                  w='24px'
                  h='2px'
                  bg='currentColor'
                  top='0'
                  transition='all 0.3s ease'
                  transform={
                    isOpen ? 'rotate(45deg) translateY(11px)' : 'rotate(0)'
                  }
                />
                <Box
                  position='absolute'
                  w='24px'
                  h='2px'
                  bg='currentColor'
                  top='8px'
                  transition='all 0.3s ease'
                  opacity={isOpen ? 0 : 1}
                />
                <Box
                  position='absolute'
                  w='24px'
                  h='2px'
                  bg='currentColor'
                  top='16px'
                  transition='all 0.3s ease'
                  transform={
                    isOpen ? 'rotate(-45deg) translateY(-11px)' : 'rotate(0)'
                  }
                />
              </Box>
            </IconButton>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Drawer Menu - Outside nav with lower z-index */}
      <DrawerRoot
        open={isOpen}
        onOpenChange={() => setIsOpen(false)}
        placement='end'
      >
        <DrawerBackdrop zIndex={90} />
        <DrawerContent
          zIndex={90}
          pt='70px'
          position='fixed'
          top='0'
          right='0'
          h='100vh'
        >
          <DrawerHeader>
            <Box>Meny</Box>
            <DrawerCloseTrigger onClick={onClose} />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align='stretch'>
              <NavLinks />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </>
  )
}

export default Nav
