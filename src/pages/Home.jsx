import { Link } from 'react-router-dom'

const Home = () => (
  <div className='min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50'>
    <header className='container-xl py-8'>
      <nav className='flex justify-between items-center'>
        <div className='text-gradient text-2xl font-bold'>Your Brand</div>
        <div className='space-x-4'>
          <Link to='/' className='btn btn-outline btn-sm'>
            Home
          </Link>
          <Link to='/styling' className='btn btn-primary btn-sm'>
            Design System
          </Link>
        </div>
      </nav>
    </header>

    <main className='container-lg py-16'>
      <div className='text-center animate-fade-in'>
        <h1 className='text-gradient mb-6'>Welcome</h1>
        <p className='text-xl text-secondary-600 mb-8 max-w-2xl mx-auto'>
          This is your optimized React + Tailwind + Vite project with routing
          and lazy loading.
        </p>
        <Link to='/styling' className='btn btn-primary btn-lg'>
          Explore Design System
        </Link>
      </div>
    </main>
  </div>
)

export default Home
