import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='sticky top-0 z-50 bg-white container-md py-8'>
      <nav className='flex justify-between items-center'>
        <Link
          to='/'
          className='text-gradient text-2xl font-bold'
          aria-label='Go to top'
        >
          Your Brand
        </Link>
        <div className='space-x-4'>
          <Link
            to='/'
            className='text-secondary-600 hover:text-primary-600 transition'
          >
            Tjänster
          </Link>
          <Link
            to='/styling'
            className='text-secondary-600 hover:text-primary-600 transition'
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
