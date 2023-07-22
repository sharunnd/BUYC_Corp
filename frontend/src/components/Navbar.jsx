import { Box, Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT_SUCCESS } from "../redux/loginReducer/actionTypes";
import { getAllOemSpecs } from "../redux/oemReducer/action";

export const Navbar = () => {
  const isAuth = useSelector((store) => store.loginReducer.isAuth);
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const toast = useToast();
  const [query, setQuery] = useState("");
  const ref = useRef();
  const userRole = Cookies.get("role");

  const navigate = useNavigate();
  const paramObj = {
    params: {
      query: query && query,
    },
  };

  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      dispatch(getAllOemSpecs(paramObj));
    }, 1000);
  }, [query, isAuth]);

  const handleLogout = () => {
    Cookies.remove("role")
    toast({
      position: "top",
      title: `Logged out!`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    navigate("/");
    Cookies.remove("token");
    dispatch({ type: LOGOUT_SUCCESS });
  };
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
          <Link to={"/oemspecs"}>OEM Specs</Link>
          <Link to={"/buycar"}>Buy</Link>
          {userRole === "dealer" ? <Link to={"/sellcar"}>Sell</Link> : ""}
        </Flex>
        <Input
          w={200}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here"
          bg={"white"}
        />
        {token ? (
          <Button mr={20} p={2} mt={2} mb={2} onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Flex>
            <Button mr={5} p={2} mt={2} mb={2}>
              <Link to={"/login"}>Login</Link>
            </Button>
            <Button mr={20} p={2} mt={2} mb={2}>
              <Link to={"/signup"}>Signup</Link>
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
