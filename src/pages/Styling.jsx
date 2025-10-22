import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Input,
  FormControl,
  FormLabel,
  List,
  ListItem,
  Link,
  Flex
} from '@chakra-ui/react'

const Styling = () => {
  return (
    <Box minH='100vh' bgGradient='linear(to-br, blue.50, gray.50)'>
      {/* Hero Section */}
      <Container as='main' maxW='container.lg' py={16}>
        <VStack spacing={8} textAlign='center'>
          <Heading
            as='h1'
            size='2xl'
            bgGradient='linear(to-r, blue.600, pink.600)'
            bgClip='text'
          >
            Beautiful Chakra UI Setup
          </Heading>
          <Text fontSize='xl' color='gray.600' maxW='2xl'>
            This is your custom Chakra UI setup with predefined colors,
            typography, and component styles ready to use.
          </Text>
          <HStack spacing={4}>
            <Button colorScheme='blue' size='lg'>
              Primary Action
            </Button>
            <Button variant='outline' colorScheme='blue' size='lg'>
              Secondary Action
            </Button>
          </HStack>
        </VStack>

        {/* Feature Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={16}>
          <Box
            bg='white'
            p={6}
            borderRadius='lg'
            boxShadow='md'
            _hover={{ boxShadow: 'lg' }}
            transition='box-shadow 0.2s'
          >
            <Box
              w={12}
              h={12}
              bgGradient='linear(to-r, blue.500, blue.700)'
              borderRadius='lg'
              mb={4}
              display='flex'
              alignItems='center'
              justifyContent='center'
              fontSize='xl'
            >
              🎨
            </Box>
            <Heading as='h3' size='md' mb={3}>
              Custom Colors
            </Heading>
            <Text color='gray.600'>
              Primary, secondary, and accent color palettes with complete design
              flexibility.
            </Text>
          </Box>

          <Box
            bg='white'
            p={6}
            borderRadius='lg'
            boxShadow='md'
            _hover={{ boxShadow: 'lg' }}
            transition='box-shadow 0.2s'
          >
            <Box
              w={12}
              h={12}
              bgGradient='linear(to-r, pink.500, pink.700)'
              borderRadius='lg'
              mb={4}
              display='flex'
              alignItems='center'
              justifyContent='center'
              fontSize='xl'
            >
              📝
            </Box>
            <Heading as='h3' size='md' mb={3}>
              Typography System
            </Heading>
            <Text color='gray.600'>
              Consistent heading hierarchy and paragraph styles with responsive
              sizing and proper spacing.
            </Text>
          </Box>

          <Box
            bg='white'
            p={6}
            borderRadius='lg'
            boxShadow='md'
            _hover={{ boxShadow: 'lg' }}
            transition='box-shadow 0.2s'
          >
            <Box
              w={12}
              h={12}
              bg='gray.600'
              borderRadius='lg'
              mb={4}
              display='flex'
              alignItems='center'
              justifyContent='center'
              fontSize='xl'
            >
              🧩
            </Box>
            <Heading as='h3' size='md' mb={3}>
              Component Library
            </Heading>
            <Text color='gray.600'>
              Pre-built button variants, cards, forms, and utility classes ready
              to use in your projects.
            </Text>
          </Box>
        </SimpleGrid>

        {/* Demo Section */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={12}
          mt={16}
          alignItems='center'
        >
          <Box>
            <Heading as='h2' size='xl' mb={4}>
              Typography Showcase
            </Heading>
            <Heading as='h3' size='lg' mb={3}>
              This is an H3 heading
            </Heading>
            <Heading as='h4' size='md' mb={3}>
              This is an H4 heading
            </Heading>
            <Heading as='h5' size='sm' mb={3}>
              This is an H5 heading
            </Heading>
            <Text mb={4}>
              This is a paragraph with proper spacing and typography. It
              includes
              <Link href='#' color='blue.600' mx={1}>
                a sample link
              </Link>
              and demonstrates the default text styling.
            </Text>
            <List spacing={2} pl={6} styleType='disc'>
              <ListItem>List item with proper spacing</ListItem>
              <ListItem>Another list item</ListItem>
              <ListItem>Third list item for demonstration</ListItem>
            </List>
          </Box>

          <VStack spacing={4} align='stretch'>
            <Heading as='h2' size='xl' mb={2}>
              Component Examples
            </Heading>

            {/* Form Example */}
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input type='email' placeholder='Enter your email' />
            </FormControl>

            {/* Button Examples */}
            <VStack spacing={3} align='stretch'>
              <HStack spacing={3}>
                <Button colorScheme='blue'>Primary</Button>
                <Button colorScheme='gray'>Secondary</Button>
                <Button colorScheme='pink'>Accent</Button>
              </HStack>
              <HStack spacing={3}>
                <Button variant='outline' colorScheme='blue'>
                  Outline
                </Button>
                <Button colorScheme='blue' size='sm'>
                  Small
                </Button>
                <Button colorScheme='gray' size='lg'>
                  Large
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        {/* Color Palette Demo */}
        <Box mt={16}>
          <Heading as='h2' size='xl' textAlign='center' mb={8}>
            Color Palette
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {/* Blue Colors */}
            <Box>
              <Heading as='h4' size='md' mb={4}>
                Blue Colors
              </Heading>
              <VStack spacing={2} align='stretch'>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <Flex key={shade} align='center' gap={3}>
                      <Box
                        w={8}
                        h={8}
                        borderRadius='md'
                        bg={`blue.${shade}`}
                        border='1px'
                        borderColor='gray.200'
                      />
                      <Text fontSize='sm'>blue.{shade}</Text>
                    </Flex>
                  )
                )}
              </VStack>
            </Box>

            {/* Gray Colors */}
            <Box>
              <Heading as='h4' size='md' mb={4}>
                Gray Colors
              </Heading>
              <VStack spacing={2} align='stretch'>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <Flex key={shade} align='center' gap={3}>
                      <Box
                        w={8}
                        h={8}
                        borderRadius='md'
                        bg={`gray.${shade}`}
                        border='1px'
                        borderColor='gray.200'
                      />
                      <Text fontSize='sm'>gray.{shade}</Text>
                    </Flex>
                  )
                )}
              </VStack>
            </Box>

            {/* Pink Colors */}
            <Box>
              <Heading as='h4' size='md' mb={4}>
                Pink Colors
              </Heading>
              <VStack spacing={2} align='stretch'>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <Flex key={shade} align='center' gap={3}>
                      <Box
                        w={8}
                        h={8}
                        borderRadius='md'
                        bg={`pink.${shade}`}
                        border='1px'
                        borderColor='gray.200'
                      />
                      <Text fontSize='sm'>pink.{shade}</Text>
                    </Flex>
                  )
                )}
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>

      {/* Footer */}
      <Box as='footer' borderTop='1px' borderColor='gray.200' py={8} mt={16}>
        <Container maxW='container.xl'>
          <Text textAlign='center' color='gray.500'>
            Built with Chakra UI • Vite • React
          </Text>
        </Container>
      </Box>
    </Box>
  )
}

export default Styling
