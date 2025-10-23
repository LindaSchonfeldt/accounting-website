import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const HamburgerIcon = ({ isOpen }) => {
  return (
    <Box position='relative' w='24px' h='18px'>
      <Box
        position='absolute'
        w='24px'
        h='2px'
        bg='currentColor'
        top='0'
        transition='all 0.3s ease'
        transform={isOpen ? 'rotate(45deg) translateY(11px)' : 'rotate(0)'}
      />
      <Box
        position='absolute'
        w='24px'
        h='2px'
        bg='currentColor'
        top='8px'
        transition='all 0.3s ease'
        opacity={isOpen ? 0 : 1}
      />
      <Box
        position='absolute'
        w='24px'
        h='2px'
        bg='currentColor'
        top='16px'
        transition='all 0.3s ease'
        transform={isOpen ? 'rotate(-45deg) translateY(-11px)' : 'rotate(0)'}
      />
    </Box>
  )
}

HamburgerIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default HamburgerIcon
