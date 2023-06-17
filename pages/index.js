import {
  Tabs, TabList, TabPanels, Tab, TabPanel, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, Spinner, HStack, Text, Button, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box ,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

import axios from "axios"
import { useEffect  , useState} from "react"


export default function Home() {

  const [ titleOne , setTitleOne ] = useState('')

  useEffect(()=>{

    const fetch=async()=>{
      const res = await axios.get(`http://192.168.1.31:8001/read`)
    setTitleOne(res.data)
    }
    fetch()
  },[])

  useEffect(()=>{
    console.log(titleOne)
  },[titleOne])

  return (
    <>
      <Tabs isFitted variant='enclosed' h={'100vh'} m={'50px'}>
        <TabList mb='1em'>
          {
            titleOne && titleOne.map((item)=>(
              <Tab>{item.title}</Tab>
            ))
            
          }
        </TabList>
        <TabPanels>
          <TabPanel>
            <Tabs size='md' variant='enclosed'>
              <TabList>
                <Tab>Docker</Tab>
                <Tab>Systemctl</Tab>
              </TabList>
              <TabPanels>
                <TabPanel w={'15%'}>
                  <List spacing={4}>

                    <Accordion allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                              Service Group 1
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <ListItem mb={'10px'} >
                            {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
                            <HStack  justifyContent={'space-between'}>
                              <Spinner color='green.500' mr={'10px'} />
                              <Text>Service 1</Text>
                              <Button colorScheme='red' ml={'20px'} variant='outline' fontSize={'20px'}>Stop</Button>
                            </HStack>
                          </ListItem>
                          <ListItem mb={'10px'}>
                            {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
                            <HStack justifyContent={'space-between'}>
                              <Spinner color='red.500' mr={'10px'} />
                              <Text>Service 2</Text>
                              <Button colorScheme='green' ml={'20px'} variant='outline' fontSize={'20px'}>Start</Button>
                            </HStack>
                          </ListItem >
                          <ListItem mb={'10px'}>
                            {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
                            <HStack justifyContent={'space-between'}>
                              <Spinner color='green.500' mr={'10px'} />
                              <Text>Service 3</Text>
                              <Button colorScheme='red' ml={'20px'} variant='outline' fontSize={'20px'}>Stop</Button>
                            </HStack>
                          </ListItem>
                          <ListItem mb={'10px'}>
                            {/* <ListIcon as={MdSettings} color='green.500' /> */}
                            <HStack justifyContent={'space-between'}>
                              <Spinner color='red.500' mr={'10px'} />
                              <Text>Service 4</Text>
                              <Button colorScheme='green' ml={'20px'} variant='outline' fontSize={'20px'}>Start</Button>
                            </HStack>
                          </ListItem>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                              Service Group 2
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <ListItem mb={'10px'}>
                            {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
                            <HStack justifyContent={'space-between'}>
                              <Spinner color='green.500' mr={'10px'} />
                              <Text>Service 1</Text>
                              <Button colorScheme='red' ml={'20px'} variant='outline' fontSize={'20px'}>Stop</Button>
                            </HStack>
                          </ListItem>
                          <ListItem mb={'10px'}>
                            {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
                            <HStack justifyContent={'space-between'}>
                              <Spinner color='red.500' mr={'10px'} />
                              <Text>Service 2</Text>
                              <Button colorScheme='green' ml={'20px'} variant='outline' fontSize={'20px'}>Start</Button>
                            </HStack>
                          </ListItem>
                          <ListItem mb={'10px'}>
                            {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
                            <HStack justifyContent={'space-between'}>
                              <Spinner color='green.500' mr={'10px'} />
                              <Text>Service 3</Text>
                              <Button colorScheme='red' ml={'20px'} variant='outline' fontSize={'20px'}>Stop</Button>
                            </HStack>
                          </ListItem >
                          {/* You can also use cust
                            om icons from react-icons */}
                          <ListItem mb={'10px'}>
                            {/* <ListIcon as={MdSettings} color='green.500' /> */}
                            <HStack justifyContent={'space-between'}>
                              <Spinner color='red.500' mr={'10px'} />
                              <Text>Service 4</Text>
                              <Button colorScheme='green' ml={'20px'} variant='outline' fontSize={'20px'}>Start</Button>
                            </HStack>
                          </ListItem>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                  </List>
                </TabPanel>
                <TabPanel>
                  <p>systemctl!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>Three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
