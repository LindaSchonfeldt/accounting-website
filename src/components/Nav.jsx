import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='container-md py-8'>
        <nav
          className='flex justify-between items-center'
          aria-label='Main navigation'
        >
          <h1>
            <Link
              to='/'
              className='text-gradient text-2xl font-bold'
              aria-label='Go to top'
            >
              Your Brand
            </Link>
          </h1>
          <ul className='flex space-x-4'>
            <li>
              <a
                href='#services'
                className='text-secondary-600 hover:text-primary-600 transition'
                aria-current={
                  window.location.hash === '#services' ? 'section' : undefined
                }
              >
                Tjänster
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='text-secondary-600 hover:text-primary-600 transition'
                aria-current={
                  window.location.hash === '#contact' ? 'section' : undefined
                }
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav
