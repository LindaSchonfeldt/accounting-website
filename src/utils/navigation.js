/**
 * Smooth scroll handler with cross-page navigation support
 * @param {Event|React.MouseEvent} e - Click event
 * @param {string} targetId - Target element ID (e.g., '#tjanster')
 * @param {Function} navigate - React Router navigate function
 * @param {Object} location - React Router location object
 */

export const handleSmoothScroll = (e, targetId, navigate, location) => {
  e.preventDefault()

  const scrollToElement = () => {
    const element = document.querySelector(targetId)
    if (element) {
      const navHeight = 60
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // If not on home page, navigate to home first
  if (location.pathname !== '/') {
    navigate('/')
    setTimeout(scrollToElement, 100)
  } else {
    // Already on home page, just scroll
    scrollToElement()
  }
}

/**
 * Scroll to top of page with smooth animation
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
