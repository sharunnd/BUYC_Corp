import axios from "axios"

import Cookies from "js-cookie"
import { SELL_FAILURE, SELL_POST_SUCCESS, SELL_REQUEST } from "./actionTypes"

// const token = Cookies.get("token")
export const addCarDetails =(carObj,token)=>(dispatch)=>{
    dispatch({type:SELL_REQUEST})
     
   return axios.post(`https://buycars-gksq.onrender.com/cars/add`,carObj,{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
          }).then((res)=>{
        dispatch({type:SELL_POST_SUCCESS})
        
        console.log("sell",res);
        return res
    })
    .catch((err)=>{
        
        dispatch({type:SELL_FAILURE})
        return err
    })
}