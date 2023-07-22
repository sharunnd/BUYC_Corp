import axios from "axios"
import { CARS_DELETE_SUCCESS, CARS_FAILURE, CARS_REQUEST, CARS_SUCCESS} from "./actionTypes"


export const getAllCars =(paramObj)=>(dispatch)=>{
    dispatch({type:CARS_REQUEST})
    axios.get(`https://buycars-gksq.onrender.com/cars`,paramObj).then((res)=>{
        dispatch({type:CARS_SUCCESS,payload:res.data.cars})
    })
    .catch((err)=>{
        dispatch({type:CARS_FAILURE})
    })
}

export const deleteCarDetails = (id,token)=>(dispatch) =>{
    dispatch({type:CARS_REQUEST})
    
    let payload=[]
    axios.get(`https://buycars-gksq.onrender.com/cars`).then((res)=>{
        payload = res.data.cars.filter((el)=>el._id!==id)
    })
    

    return axios.delete(`https://buycars-gksq.onrender.com/cars/delete/${id}`,{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
        }).then((res)=>{
          dispatch({type:CARS_DELETE_SUCCESS,payload})
         return res     
    })
    .catch((err)=>{
        dispatch({type:CARS_FAILURE})
        return err
    })
}