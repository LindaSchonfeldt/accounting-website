import { Box } from '@chakra-ui/react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

interface TabMenuProps {
  tabs: string[]
  children?: React.ReactNode[]
  defaultIndex?: number
}

const TabMenu: React.FC<TabMenuProps> = ({
  tabs,
  children,
  defaultIndex = 0
}) => {
  return (
    <Tabs
      size='md'
      variant='enclosed-colored'
      colorScheme='blue'
      defaultIndex={defaultIndex}
      isLazy
      lazyBehavior='unmount'
    >
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab}</Tab>
        ))}
      </TabList>

      {children && (
        <TabPanels>
          {children.map((child, index) => (
            <TabPanel key={index} p={0}>
              <Box py={4}>{child}</Box>
            </TabPanel>
          ))}
        </TabPanels>
      )}
    </Tabs>
  )
}

export default TabMenu
