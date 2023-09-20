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
        fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "26px" }}
        textAlign="left"
        ml={{ base: "10px", sm: "15px", md: "20px", lg: "50px" }}
        pt={{ base: 4, sm: 6, md: 8, lg: 10 }}
      >
        BuyCars
      </Heading>

      <Center mt={{ base: 10, sm: 12, md: 14, lg: 16 }}>
        <Text>
          &copy; {new Date().getFullYear()} BuyCars. All rights reserved.
        </Text>
      </Center>
    </Box>
  );
}

export { Footer };
