import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
  VStack
} from '@chakra-ui/react'

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const NavLinks = () => (
    <>
      <Link
        href='#services'
        color='gray.600'
        _hover={{ color: 'blue.600' }}
        transition='color 0.2s'
        aria-current={window.location.hash === '#services' ? 'page' : undefined}
        onClick={onClose}
      >
        Tjänster
      </Link>
      <Link
        href='#faq'
        color='gray.600'
        _hover={{ color: 'blue.600' }}
        transition='color 0.2s'
        aria-current={window.location.hash === '#faq' ? 'page' : undefined}
        onClick={onClose}
      >
        Vanliga frågor
      </Link>
      <Link
        href='#contact'
        color='gray.600'
        _hover={{ color: 'blue.600' }}
        transition='color 0.2s'
        aria-current={window.location.hash === '#contact' ? 'page' : undefined}
        onClick={onClose}
      >
        Kontakt
      </Link>
    </>
  )

  return (
    <Box
      as='header'
      position='sticky'
      top={0}
      zIndex={50}
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
                aria-current={
                  window.location.hash === '#services' ? 'page' : undefined
                }
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
                aria-current={
                  window.location.hash === '#faq' ? 'page' : undefined
                }
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
                aria-current={
                  window.location.hash === '#contact' ? 'page' : undefined
                }
              >
                Kontakt
              </Link>
            </Box>
          </Flex>

          {/* Mobile Hamburger Button with custom icon */}
          <IconButton
            aria-label='Open menu'
            onClick={onOpen}
            display={{ base: 'flex', md: 'none' }}
            variant='ghost'
            icon={
              <Box>
                <Box w='24px' h='2px' bg='currentColor' mb='6px' />
                <Box w='24px' h='2px' bg='currentColor' mb='6px' />
                <Box w='24px' h='2px' bg='currentColor' />
              </Box>
            }
          />

          {/* Mobile Drawer Menu */}
          <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Meny</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align='stretch'>
                  <NavLinks />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
