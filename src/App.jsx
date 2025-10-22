import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, Center, Spinner, Text } from '@chakra-ui/react'
import Home from './pages/Home.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

// Lazy load pages for better performance
const Styling = lazy(() => import('./pages/Styling.jsx'))

// Loading fallback component
const LoadingFallback = () => (
  <Box
    minH='100vh'
    display='flex'
    alignItems='center'
    justifyContent='center'
    bgGradient='linear(to-br, blue.50, gray.50)'
  >
    <Center flexDirection='column'>
      <Spinner size='xl' color='blue.600' thickness='4px' mb={4} />
      <Text color='gray.600'>Laddar...</Text>
    </Center>
  </Box>
)

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/styling'
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Styling />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
