import { Box } from '@chakra-ui/react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

interface TabMenuProps {
  tabs: string[]
  children?: React.ReactNode[]
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, children }) => {
  return (
    <Tabs variant='enclosed' colorScheme='blue'>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab}</Tab>
        ))}
      </TabList>

      {children && (
        <TabPanels>
          {children.map((child, index) => (
            <TabPanel key={index} p={{ base: 0, md: 4 }}>
              <Box py={4}>{child}</Box>
            </TabPanel>
          ))}
        </TabPanels>
      )}
    </Tabs>
  )
}

export default TabMenu
