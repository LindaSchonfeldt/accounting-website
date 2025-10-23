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
      >
        Tjänster
      </Link>
      <Link
        href='#faq'
        color='gray.600'
        _hover={{ color: 'blue.600' }}
        transition='color 0.2s'
        onClick={onClose}
      >
        Vanliga frågor
      </Link>
      <Link
        href='#contact'
        color='gray.600'
        _hover={{ color: 'blue.600' }}
        transition='color 0.2s'
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
            <Box>
              <Box w='24px' h='2px' bg='currentColor' mb='6px' />
              <Box w='24px' h='2px' bg='currentColor' mb='6px' />
              <Box w='24px' h='2px' bg='currentColor' />
            </Box>
          </IconButton>

          {/* Mobile Drawer Menu */}
          <DrawerRoot
            open={isOpen}
            onOpenChange={(e) => setIsOpen(e.open)}
            placement='end'
          >
            <DrawerBackdrop />
            <DrawerContent>
              <DrawerHeader>
                <Box>Meny</Box>
                <DrawerCloseTrigger />
              </DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align='stretch'>
                  <NavLinks />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerRoot>
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
