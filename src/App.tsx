import { Box, Spinner, Text, VStack } from '@chakra-ui/react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/ui/Footer'
import Nav from './components/ui/Nav'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const IntegrityPolicy = lazy(() => import('./pages/IntegrityPolicy'))
const Conditions = lazy(() => import('./pages/Conditions'))
const Cookies = lazy(() => import('./pages/Cookies'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const App: React.FC = () => {
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
            </VStack>
          </Box>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tjanster' element={<Services />} />
          <Route path='/integritetspolicy' element={<IntegrityPolicy />} />
          <Route path='/villkor' element={<Conditions />} />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
