import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineApple,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest, BsSnapchat } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <Box bg="#dbdbf5" color="black">
      <Heading
        color="black"
        fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "36px" }}
        textAlign="left"
        ml={{ base: "10px", sm: "15px", md: "20px", lg: "50px" }}
        pt={{ base: 4, sm: 6, md: 8, lg: 10 }}
      >
        BuyCars
      </Heading>

      <Center mx={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} textAlign="left" mt={{ base: 8, sm: 10, md: 12, lg: 14 }}>
          <Box fontSize={{ base: "14px", sm: "16px", md: "18px" }}>
            <Text color="black" mb={5}>
              CUSTOMER SERVICE
            </Text>
            <Text>Contact us</Text>
            <Text>Track order</Text>
            <Box mt={10}></Box>
          </Box>
          <Box fontSize={{ base: "14px", sm: "16px", md: "18px"}}>
            <Text color="black" mb={5}>
              COMPANY
            </Text>
            <Text>About us</Text>
            <Text>Terms and Conditions</Text>
            <Text>Privacy Policy</Text>
            <Text>Blog</Text>
          </Box>
          <Box fontSize={{ base: "14px", sm: "16px", md: "18px"}}>
            <Text color="black" mb={5}>
              CONNECT WITH US
            </Text>
            <Text mt={1}>
              <IconButton
                size="sm"
                fontSize={{ base: "16px", sm: "16px", md: "16px"}}
                icon={<AiOutlineFacebook />}
              />
              1M People like this
            </Text>
            <Text mt={1}>
              <IconButton
                size="sm"
                fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                icon={<AiOutlineInstagram />}
              />
              2M Followers
            </Text>
            <HStack>
              <Text mt={3}>
                <IconButton
                  size="sm"
                  fontSize={{ base: "16px", sm: "16px", md: "16px"}}
                  icon={<CiTwitter />}
                />
              </Text>
              <Text mt={3}>
                <IconButton
                  size="sm"
                  fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                  icon={<BsPinterest />}
                />
              </Text>
              <Text mt={3}>
                <IconButton
                  size="sm"
                  fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                  icon={<BsSnapchat />}
                />
              </Text>
              <Text mt={3}>
                <IconButton
                  size="sm"
                  fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                  icon={<AiOutlineApple />}
                />
              </Text>
            </HStack>
          </Box>
          <Box fontSize={{ base: "14px", sm: "16px", md: "18px" }}>
            <Text color="black" mb={5}>
              KEEP UP TO DATE
            </Text>

            <FormControl>
              <HStack>
                <Input
                  size={{ base: "sm", sm: "md", md: "lg", lg: "lg" }}
                  fontSize={{ base: "sm", sm: "md", md: "md", lg: "lg" }}
                  borderRadius="none"
                  placeholder="Enter Email ID"
                  borderTop="none"
                  borderLeft="none"
                />
                <Button
                  size={{ base: "sm", sm: "md", md: "md", lg: "lg" }}
                  fontSize={{ base: "sm", sm: "md", md: "md", lg: "lg" }}
                  color="black"
                  borderRadius="none"
                  bg="yellow.400"
                >
                  Subscribe
                </Button>
              </HStack>
            </FormControl>
          </Box>
        </SimpleGrid>
      </Center>
      <Center mt={{ base: 10, sm: 12, md: 14, lg: 16 }}>
        <Text>
          &copy; {new Date().getFullYear()} BuyCars. All rights reserved.
        </Text>
      </Center>
    </Box>
  );
}

export { Footer };
