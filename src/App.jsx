import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

// Lazy load pages for better performance
const Styling = lazy(() => import('./pages/Styling.jsx'))

// Loading fallback component
const LoadingFallback = () => (
  <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50'>
    <div className='text-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4'></div>
      <p className='text-secondary-600'>Loading...</p>
    </div>
  </div>
)

// Home page

export const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
