import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

import Footer from './components/ui/Footer'
import Nav from './components/ui/Nav'
import ScrollToTop from './components/ui/ScrollToTop'
import theme from './theme'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Services = lazy(() => import('./pages/Services'))
const NotFound = lazy(() => import('./pages/NotFound'))
const IntegrityPolicy = lazy(() => import('./pages/IntegrityPolicy'))
const Conditions = lazy(() => import('./pages/Conditions'))
const Cookies = lazy(() => import('./pages/Cookies'))

export const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <ScrollToTop />
          <Box display='flex' flexDirection='column' minHeight='100vh'>
            <Nav />
            <Box flex='1'>
              <Suspense
                fallback={
                  <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    minH='80vh'
                  >
                    <Spinner size='xl' color='blue.500' thickness='4px' />
                  </Box>
                }
              >
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/tjanster' element={<Services />} />
                  <Route path='/om-oss' element={<About />} />
                  <Route path='/kontakt' element={<Contact />} />
                  <Route path='/vanliga-fragor' element={<FAQ />} />
                </Routes>
              </Suspense>
            </Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  )
}

export default App
