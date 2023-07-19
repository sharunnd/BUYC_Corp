import axios from "axios"
import { CARS_FAILURE, CARS_REQUEST, CARS_SUCCESS} from "./actionTypes"


export const getAllCars =(dispatch)=>{
    dispatch({type:CARS_REQUEST})
    axios.get(`https://buycars-gksq.onrender.com/cars`).then((res)=>{
        dispatch({type:CARS_SUCCESS,payload:res.data.cars})
    })
    .catch((err)=>{
        dispatch({type:CARS_FAILURE})
    })
}