const Styling = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50'>
      {/* Header */}
      <header className='container-xl py-8'>
        <nav className='flex justify-between items-center'>
          <div className='text-gradient text-2xl font-bold'>Your Brand</div>
          <div className='space-x-4'>
            <button className='btn btn-outline btn-sm'>Sign In</button>
            <button className='btn btn-primary btn-sm'>Get Started</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className='container-lg py-16'>
        <div className='text-center animate-fade-in'>
          <h1 className='text-gradient mb-6'>Beautiful Tailwind Setup</h1>
          <p className='text-xl text-secondary-600 mb-8 max-w-2xl mx-auto'>
            This is your custom Tailwind CSS setup with predefined colors,
            typography, and component styles ready to use.
          </p>
          <div className='space-x-4'>
            <button className='btn btn-primary btn-lg'>Primary Action</button>
            <button className='btn btn-secondary btn-lg'>
              Secondary Action
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className='grid md:grid-cols-3 gap-8 mt-16'>
          <div className='card animate-slide-up'>
            <div className='w-12 h-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center'>
              <span className='text-white text-xl'>🎨</span>
            </div>
            <h3>Custom Colors</h3>
            <p>
              Primary, secondary, and accent color palettes with 50-950 shades
              for complete design flexibility.
            </p>
          </div>

          <div
            className='card animate-slide-up'
            style={{ animationDelay: '0.1s' }}
          >
            <div className='w-12 h-12 bg-gradient-accent rounded-lg mb-4 flex items-center justify-center'>
              <span className='text-white text-xl'>📝</span>
            </div>
            <h3>Typography System</h3>
            <p>
              Consistent heading hierarchy and paragraph styles with responsive
              sizing and proper spacing.
            </p>
          </div>

          <div
            className='card animate-slide-up'
            style={{ animationDelay: '0.2s' }}
          >
            <div className='w-12 h-12 bg-secondary-600 rounded-lg mb-4 flex items-center justify-center'>
              <span className='text-white text-xl'>🧩</span>
            </div>
            <h3>Component Library</h3>
            <p>
              Pre-built button variants, cards, forms, and utility classes ready
              to use in your projects.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className='mt-16 grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2>Typography Showcase</h2>
            <h3>This is an H3 heading</h3>
            <h4>This is an H4 heading</h4>
            <h5>This is an H5 heading</h5>
            <p>
              This is a paragraph with proper spacing and typography. It
              includes
              <a href='#' className='mx-1'>
                a sample link
              </a>
              and demonstrates the default text styling.
            </p>
            <ul>
              <li>List item with proper spacing</li>
              <li>Another list item</li>
              <li>Third list item for demonstration</li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2>Component Examples</h2>

            {/* Form Example */}
            <div className='form-group'>
              <label className='form-label'>Email Address</label>
              <input
                type='email'
                className='form-input'
                placeholder='Enter your email'
              />
            </div>

            {/* Button Examples */}
            <div className='space-y-3'>
              <div className='flex space-x-3'>
                <button className='btn btn-primary'>Primary</button>
                <button className='btn btn-secondary'>Secondary</button>
                <button className='btn btn-accent'>Accent</button>
              </div>
              <div className='flex space-x-3'>
                <button className='btn btn-outline'>Outline</button>
                <button className='btn btn-primary btn-sm'>Small</button>
                <button className='btn btn-secondary btn-lg'>Large</button>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette Demo */}
        <div className='mt-16'>
          <h2 className='text-center mb-8'>Color Palette</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Primary Colors */}
            <div>
              <h4 className='mb-4'>Primary Colors</h4>
              <div className='space-y-2'>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className='flex items-center space-x-3'>
                      <div
                        className={`w-8 h-8 rounded bg-primary-${shade} border border-secondary-200`}
                      ></div>
                      <span className='text-sm'>primary-{shade}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Secondary Colors */}
            <div>
              <h4 className='mb-4'>Secondary Colors</h4>
              <div className='space-y-2'>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className='flex items-center space-x-3'>
                      <div
                        className={`w-8 h-8 rounded bg-secondary-${shade} border border-secondary-200`}
                      ></div>
                      <span className='text-sm'>secondary-{shade}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Accent Colors */}
            <div>
              <h4 className='mb-4'>Accent Colors</h4>
              <div className='space-y-2'>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className='flex items-center space-x-3'>
                      <div
                        className={`w-8 h-8 rounded bg-accent-${shade} border border-secondary-200`}
                      ></div>
                      <span className='text-sm'>accent-{shade}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='container-xl py-8 mt-16 border-t border-secondary-200'>
        <div className='text-center text-secondary-500'>
          <p>Built with Tailwind CSS • Vite • React</p>
        </div>
      </footer>
    </div>
  )
}

export default Styling
