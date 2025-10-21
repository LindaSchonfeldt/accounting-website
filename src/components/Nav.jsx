const Nav = () => {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='container-lg py-1'>
        <nav
          className='flex items-center justify-between h-14'
          aria-label='Main navigation'
        >
          <h1 className='flex items-center h-full'>
            <a
              href='#hero'
              className='text-gradient text-2xl font-bold flex items-center h-full'
              aria-label='Go to top'
            >
              Billig Bokföring
            </a>
          </h1>
          <ul className='flex items-center space-x-4 h-full'>
            <li>
              <a
                href='#services'
                className='text-secondary-600 hover:text-primary-600 transition flex items-center h-full'
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
                className='text-secondary-600 hover:text-primary-600 transition flex items-center h-full'
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
