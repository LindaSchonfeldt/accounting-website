import { Box } from '@chakra-ui/react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

interface TabMenuProps {
  tabs: string[]
  children?: React.ReactNode[]
  index?: number
  onChange?: (index: number) => void
}

const TabMenu: React.FC<TabMenuProps> = ({
  tabs,
  children,
  index = 0,
  onChange
}) => {
  return (
    <Tabs
      size='md'
      variant='enclosed-colored'
      colorScheme='blue'
      index={index}
      onChange={onChange}
      isLazy
      lazyBehavior='unmount'
    >
      <TabList mb={8}>
        {tabs.map((tab, idx) => (
          <Tab key={idx}>{tab}</Tab>
        ))}
      </TabList>

      {children && (
        <TabPanels>
          {children.map((child, idx) => (
            <TabPanel key={idx} p={0}>
              <Box py={4}>{child}</Box>
            </TabPanel>
          ))}
        </TabPanels>
      )}
    </Tabs>
  )
}

export default TabMenu
