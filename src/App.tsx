import { Box } from '@chakra-ui/react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/ui/Footer'
import LoadingSpinner from './components/ui/LoadingSymbol'
import Nav from './components/ui/Nav'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const NotFound = lazy(() => import('./pages/NotFound'))
const IntegrityPolicy = lazy(() => import('./pages/IntegrityPolicy'))
const Conditions = lazy(() => import('./pages/Conditions'))
const Cookies = lazy(() => import('./pages/Cookies'))

export const App = () => {
  return (
    <BrowserRouter>
      <Box display='flex' flexDirection='column' minHeight='100vh'>
        <Nav />
        <Box flex='1'>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/tjanster' element={<Services />} />
              <Route path='/integritetspolicy' element={<IntegrityPolicy />} />
              <Route path='/villkor' element={<Conditions />} />
              <Route path='/cookies' element={<Cookies />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}
