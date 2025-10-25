import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/ui/Nav'
import { Box, Spinner, VStack, Text } from '@chakra-ui/react'
import Footer from './components/ui/Footer'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Nav />
      <Suspense
        fallback={
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            minH='100vh'
          >
            <VStack spacing={4}>
              <Spinner size='xl' color='blue.500' thickness='4px' />
              <Text fontSize='lg' color='gray.600'>
                Laddar...
              </Text>
            </VStack>
          </Box>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
