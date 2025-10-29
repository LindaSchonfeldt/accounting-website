import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDown } from 'lucide-react'

interface DropdownProps {
  label: string
  items: { label: string; onClick: () => void }[]
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  return (
    <Menu isLazy placement='bottom-end'>
      <MenuButton as={Button} rightIcon={<ChevronDown size={16} />}>
        {label}
      </MenuButton>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default Dropdown
