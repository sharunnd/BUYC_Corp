import { Box, Text } from "@chakra-ui/react";
import homeImage from "../images/home_img.jpg";

export const Home = () => {
  return (
    <Box>
      <Box bgImage={homeImage} h={"100vh"} width={"100%"}>
        <Text color={"white"} fontSize={{base:"30px",sm:"50px",md:"60px"}} fontWeight={600} pt={100}>
          Drive Your Deals: Buy And Sell Cars Hassle-Free
        </Text>
      </Box>
    </Box>
  );
};
