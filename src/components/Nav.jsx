import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'

const Nav = () => {
  return (
    <Box
      as='header'
      position='sticky'
      top={0}
      zIndex={50}
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
              href='#hero'
              bgGradient='linear(to-r, blue.600, pink.600)'
              bgClip='text'
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
          <List display='flex' alignItems='center' gap={4} h='full'>
            <ListItem>
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
            </ListItem>
            <ListItem>
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
            </ListItem>
          </List>
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
