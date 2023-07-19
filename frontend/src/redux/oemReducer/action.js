import axios from "axios"
import { OEM_FAILURE, OEM_REQUEST, OEM_SUCCESS } from "./actionTypes"


export const getAllOemSpecs =(paramsObj)=> (dispatch)=>{
    dispatch({type:OEM_REQUEST})
    axios.get(`https://buycars-gksq.onrender.com/oem`,paramsObj).then((res)=>{
        dispatch({type:OEM_SUCCESS,payload:res.data.oem})
    })
    .catch((err)=>{
        dispatch(OEM_FAILURE)
    })
}