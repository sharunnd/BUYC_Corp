import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT_SUCCESS } from "../redux/loginReducer/actionTypes";

export const Navbar = () => {
    const isAuth = useSelector((store)=>store.loginReducer.isAuth)
    const token = Cookies.get("token")
    const dispatch=useDispatch()
    useEffect(()=>{

    },[isAuth])
    
    const handleLogout = ()=>{
        
        Cookies.remove("token")
        dispatch({type:LOGOUT_SUCCESS})
    }
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
        {token ? <Button mr={20} p={2} mt={2} mb={2} onClick={handleLogout}>
          Logout
        </Button> :
        <Button mr={20} p={2} mt={2} mb={2}>
         <Link to={"/login"}>Login</Link>
        </Button>}
      </Flex>
    </Box>
  );
};
