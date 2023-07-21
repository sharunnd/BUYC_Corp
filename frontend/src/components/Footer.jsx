import { Box, Button, Center, FormControl, Heading, HStack, IconButton, Input, SimpleGrid,Text } from "@chakra-ui/react";
import { AiOutlineApple, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest, BsSnapchat } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";


function Footer(){
    return (
        <Box bg="#dbdbf5" color="black" mt={10}>
        <Heading color="black" fontSize={{ base: '12px', md: '20px', lg: '36px' }} textAlign="left" ml={{ base: '10px', md: '15px', lg: '50px' }} pt={10}>BuyCars</Heading>

         <Center>
          <SimpleGrid columns={4} textAlign="left" mt={50}>
            
            <Box fontSize={{ base: '10px', md: '12px', lg: '16px' }}>
               <Text color="black"  mb={5}>CUSTOMER SERVICE</Text>
               <Text>Contact us</Text>
               <Text>Track order</Text>
               <Box mt={10}>
            </Box>
            </Box>
            {/* <Spacer></Spacer> */}
            <Box fontSize={{ base: '10px', md: '12px', lg: '16px' }} >
               <Text color="black" mb={5}>COMPANY</Text>
               <Text>About us</Text>
               <Text>Terms and Conditions</Text>
               <Text>Privacy Policy</Text>
               <Text>Blog</Text>
            </Box>
            <Box fontSize={{ base: '10px', md: '12px', lg: '16px' }}>
               <Text color="black" mb={5}>CONNECT WITH US</Text>
            <Text><IconButton size={{ base: '10px', md: '10px', lg: '20px' }} fontSize={{ base: '10px', md: '10px', lg: '20px' }} icon={<AiOutlineFacebook />}/>1M People like this</Text>
            <Text><IconButton  size={{ base: '10px', md: '10px', lg: '20px' }} fontSize={{ base: '10px', md: '10px', lg: '20px' }} icon={<AiOutlineInstagram />}/>2M Followers</Text>
            <HStack>
            <Text><IconButton size={{ base: '10px', md: '10px', lg: '20px' }} fontSize={{ base: '10px', md: '10px', lg: '20px' }} icon={<CiTwitter />}/></Text>
            <Text><IconButton size={{ base: '10px', md: '10px', lg: '20px' }} fontSize={{ base: '10px', md: '10px', lg: '20px' }} icon={<BsPinterest />}/></Text>
            <Text><IconButton size={{ base: '10px', md: '10px', lg: '20px' }} fontSize={{ base: '10px', md: '10px', lg: '20px' }} icon={<BsSnapchat />}/></Text>
            <Text><IconButton size={{ base: '10px', md: '10px', lg: '20px' }} fontSize={{ base: '10px', md: '10px', lg: '20px' }} icon={<AiOutlineApple />}/></Text>
           
            </HStack>
            </Box>
            <Box fontSize={{ base: '10px', md: '12px', lg: '16px' }}>
               <Text color="black" mb={5}>KEEP UP TO DATE</Text>
               
                  <FormControl>
                  <HStack>
                     <Input size={{ base: 'xs', md: 'md', lg: 'lg' }} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} borderRadius="none" placeholder="Enter Email ID" borderTop="none" borderLeft="none"/>
                     <Button size={{ base: 'xs', md: 'md', lg: 'lg' }} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color="black" borderRadius="none" bg="yellow.400">Subscribe</Button>
                  </HStack>
                  </FormControl>
            </Box>
          </SimpleGrid>
          </Center>
          <Center mt={10}>
          <Text>
            &copy; {new Date().getFullYear()} BuyCars. All rights reserved.
          </Text>
          </Center>
        </Box>
    )
}

export {Footer}