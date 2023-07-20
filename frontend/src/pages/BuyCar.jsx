import { Box, Flex, Grid } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/carsReducer/action";
import { BuyCarCard } from "../components/BuyCarCard";
import { SideBar } from "../components/SideBar";
import { useLocation, useSearchParams } from "react-router-dom";



export const BuyCar = () =>{

  const allCars = useSelector((store) => store.carsReducer.allCars);
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const refresh = useSelector((store)=>store.carsReducer.refreshPage)
  const location = useLocation()
  let obj={
    params:{
        color:searchParams.getAll("color"),
        maxPrice:searchParams.get("maxPrice"),
        minPrice:searchParams.get("minPrice")

    }
   }
  useEffect(()=>{
    dispatch(getAllCars(obj))
  },[refresh,location.search])
  console.log("sp",searchParams.get("maxPrice"));
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

