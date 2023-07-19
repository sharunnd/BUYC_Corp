import { Box, Flex, Grid } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/carsReducer/action";
import { BuyCarCard } from "../components/BuyCarCard";
import { SideBar } from "../components/SideBar";



export const BuyCar = () =>{

  const allCars = useSelector((store) => store.carsReducer.allCars);
  const dispatch = useDispatch()

  console.log(allCars);
  useEffect(()=>{
    dispatch(getAllCars)
  },[])
    return (
        <Flex>
            <SideBar />
            <Box flex={1} mt={50}>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
            {
                allCars && allCars?.map((car)=>(
                    <BuyCarCard key={car._id} {...car}/>
                ))
            }
          </Grid>
        </Box>
        </Flex>
    )
}

