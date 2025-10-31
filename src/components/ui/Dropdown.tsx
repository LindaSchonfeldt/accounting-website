import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ResponsiveValue } from '@chakra-ui/react'
import { ChevronDown } from 'lucide-react'

interface DropdownProps {
  label: string
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  size?: 'sm' | 'md' | 'lg'
  width?: ResponsiveValue<string | number>
  items: { label: string; onClick: () => void; isActive?: boolean }[]
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  placement = 'bottom-end',
  size,
  width = 'auto' // ← Default to auto
}) => {
  return (
    <Menu isLazy placement={placement} matchWidth>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDown size={16} />}
            size={size}
            aria-label={`${label} menu`}
            aria-expanded={isOpen}
            aria-haspopup='true'
            w={width}
            textAlign={'left'}
          >
            {label}
          </MenuButton>
          <MenuList role='menu' aria-label={`${label} options`}>
            {items.map((item, index) => (
              <MenuItem
                key={index}
                onClick={item.onClick}
                role='menuitem'
                mb={4}
                bg={item.isActive ? 'blue.50' : undefined}
                fontWeight={item.isActive ? 'bold' : 'normal'}
                aria-current={item.isActive ? 'true' : undefined}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default Dropdown
