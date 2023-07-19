import { Box, Heading, Image, Text } from "@chakra-ui/react";
import homeImage from "../images/buycar_image2.jpg";

export const Home = () => {
  return (
    <Box>
      <Box bgImage={homeImage} h={"100vh"} width={"100%"}>
        <Text color={"white"} fontSize={100} fontWeight={600}>Sell your car in minutes</Text>
      </Box>
    </Box>
  );
};
