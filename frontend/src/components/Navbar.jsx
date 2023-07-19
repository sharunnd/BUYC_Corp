import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      bg="#dbdbf5"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      w="100%"
      position="sticky"
      top={0}
      zIndex="10"
    >
      <Flex alignItems="center" justifyContent={"space-between"}>
        <Heading ml={50}>BuyCars</Heading>
        <Flex w={400} alignItems="center" justifyContent={"space-between"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/"}>Home</Link>
          <Link to={"/signup"}>Signup</Link>
        </Flex>
        <Button mr={20} p={2} mt={2} mb={2}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
};
