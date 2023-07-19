import { Box, Heading, Image, Text } from "@chakra-ui/react";
import homeImage from "../images/buycar_image2.jpg";

export const Home = () => {
  return (
    <Box>
      <Box bgImage={homeImage} h={"100vh"} width={"100%"}>
        <Text color={"white"} fontSize={60} fontWeight={600}>Drive Your Deals: Buy And Sell Cars Hassle-Free</Text>
      </Box>
    </Box>
  );
};
