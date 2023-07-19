import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Divider, HStack, Heading, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"



export const SideBar = () =>{
    const [searchParams,setSearchParams] = useSearchParams()
    const initialPrice = searchParams.getAll("price")
    const [price,setPrice] = useState(initialPrice || [])
    return (
        <Box ml={{ base: '10px', md: '15px', lg: '50px' }} mr={10}>
                <HStack>
                <Heading fontSize={{ base: '15px', md: '15px', lg: '24px' }} textAlign="left" mt={10} mb={10}>Filters</Heading>
                </HStack>

                  <Accordion allowToggle w={{ base: '150px', md: '150px', lg: '300px' }}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Price
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel textAlign="left">
                            <Stack>
                               <Checkbox >{"< 10L"}</Checkbox>
                               <Checkbox  >10L-30L</Checkbox>
                               <Checkbox  >{"> 20L"}</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Colors
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel textAlign="left">
                            <Stack>
                               <Checkbox >White</Checkbox>
                               <Checkbox >Silver</Checkbox>
                               <Checkbox >Red</Checkbox>
                               <Checkbox >Blue</Checkbox>
                               <Checkbox >Black</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={14} >
                                    Mileage
                                </Box>
                                <AccordionIcon fontSize={25}/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  >
                            <Stack>
                               <Checkbox>{"< 20"}</Checkbox>
                               <Checkbox>20-30</Checkbox>
                               <Checkbox>{"> 30"}</Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                    
                </Box>
    )
}