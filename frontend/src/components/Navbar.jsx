import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useToast,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT_SUCCESS } from "../redux/loginReducer/actionTypes";
import { getAllOemSpecs } from "../redux/oemReducer/action";
import { HamburgerIcon } from "@chakra-ui/icons";

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
    Cookies.remove("role");
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

  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      bg="#dbdbf5"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      w="100%"
      position="sticky"
      top={0}
      zIndex="10"
    >
      <Flex
        alignItems="center"
        justifyContent={{
          base: "space-between",
          md: "space-between",
          lg: "space-around",
        }}
        
      >
        <Heading ml={{ base: "10px", md: "24px", lg: "40px" }} fontSize={{ base: "20px",sm:"25px",md:"30px",lg:"35px"}}>BuyCars</Heading>

        
        <Input
          w={{
            base: "50%",
            sm:"30%",
            md: "30%",
            lg: "30%", 
          }}
          mx={{base:"5px"}}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here"
          bg={"white"}
        />

        {!isSmallerScreen ? (
          <Flex
            // w="auto"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box mr={5}>
            <Link to={"/"}>Home</Link>

            </Box>
            <Box mr={5}>
            <Link to={"/oemspecs"}>OEM-Specs</Link>
            </Box>
            <Box mr={5}>
            <Link to={"/buycar"}>Buy</Link>
            </Box>
            {userRole === "dealer" ? <Box mr={5}><Link to={"/sellcar"}>Sell</Link></Box> : ""}
            {token ? (
              <Button p="10px" mt="10px" mb="10px" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Flex>
                <Button p="10px" mt="10px" mb="10px" mr={5}>
                  <Link to={"/login"}>Login</Link>
                </Button>
                <Button p="10px" mt="10px" mb="10px">
                  <Link to={"/signup"}>Signup</Link>
                </Button>
              </Flex>
            )}
          </Flex>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as={Link} to={"/"}>
                Home
              </MenuItem>
              <MenuItem as={Link} to={"/oemspecs"}>
                OEM Specs
              </MenuItem>
              <MenuItem as={Link} to={"/buycar"}>
                Buy
              </MenuItem>
              {userRole === "dealer" && (
                <MenuItem as={Link} to={"/sellcar"}>
                  Sell
                </MenuItem>
              )}
              {!token ? (
                <>
                  <MenuItem as={Link} to={"/login"}>
                    Login
                  </MenuItem>
                  <MenuItem as={Link} to={"/signup"}>
                    Signup
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              )}
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  );
};
