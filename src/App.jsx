import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Styling = lazy(() => import('./pages/Styling'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <Suspense fallback={<div>Laddar...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/styling' element={<Styling />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  )
}
