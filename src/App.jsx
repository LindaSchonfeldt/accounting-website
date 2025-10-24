import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoadingFallback from './components/ui/LoadingFallback'
import Home from './pages/Home'
import Nav from './components/ui/Nav'
import Footer from './components/ui/Footer'

// Lazy load pages for better performance
const Styling = lazy(() => import('./pages/Styling.jsx'))

export const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
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
