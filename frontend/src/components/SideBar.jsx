import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Divider, HStack, Heading, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"



export const SideBar = () =>{
    const [searchParams,setSearchParams] = useSearchParams()
    const initialColor = searchParams.getAll("color")
    const [color,setColor] = useState(initialColor || [])

    const initialminPrice = searchParams.getAll("minPrice")
    const [minPrice,setMinPrice] = useState(initialminPrice || "")

    const initialmaxPrice = searchParams.getAll("maxPrice")
    const [maxPrice,setMaxPrice] = useState(initialmaxPrice || "")
    useEffect(()=>{
        let params = {
            color
            
            
        }
        maxPrice && (params.maxPrice = maxPrice)
        minPrice && (params.minPrice = minPrice)
        setSearchParams(params)
    },[color,maxPrice,minPrice])
    const handleColor = (e)=>{
        const {value} = e.target
        let newColor = [...color]
        if(newColor.includes(value)){
            newColor = newColor.filter((el)=> el !== value)
        }else{
            newColor.push(value)
        }
        setColor(newColor)
        console.log(value)
    }
    const handleMaxPrice = (e)=>{
        const {value} = e.target
       
        if(maxPrice==value){
            setMaxPrice("")
        }else{
            setMaxPrice(value)
        }
        console.log(value)
    }
    const handleMinPrice =(e)=> {
        const {value} = e.target
       
        if(minPrice==value){
            setMinPrice("")
        }else{
            setMinPrice(value)
        }
    }
    console.log("mp",maxPrice);
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
                               <Checkbox value= {"100000"} onChange={handleMaxPrice} defaultChecked={maxPrice==100000}>{"< 10L"}</Checkbox>
                               
                               <Checkbox value= {"100000"}  onChange={handleMinPrice}>{"> 10L"}</Checkbox>
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
                               <Checkbox value= {"White"} onChange={handleColor} defaultChecked={color.includes("White")}>White</Checkbox>
                               <Checkbox value= {"Silver"} onChange={handleColor} defaultChecked={color.includes("Silver")}>Silver</Checkbox>
                               <Checkbox value= {"Red"} onChange={handleColor} defaultChecked={color.includes("Red")}>Red</Checkbox>
                               <Checkbox value= {"Blue"} onChange={handleColor} defaultChecked={color.includes("Blue")}>Blue</Checkbox>
                               <Checkbox value= {"Black"} onChange={handleColor} defaultChecked={color.includes("Black")}>Black</Checkbox>
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