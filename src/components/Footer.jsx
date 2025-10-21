const Footer = () => {
  return (
    <footer className='bg-primary-600 text-white py-6 mt-12'>
      <div className='container-md text-center'>
        <p>
          &copy; {new Date().getFullYear()} Your Brand. Alla rättigheter
          förbehållna.
        </p>
      </div>
    </footer>
  )
}

export default Footer
