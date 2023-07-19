import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, OEM_FAILURE, OEM_REQUEST, OEM_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    oemSpecs:[]
    
}


export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case OEM_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case OEM_FAILURE:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        
        case OEM_SUCCESS:{
            return {
                ...state,isLoading:false,oemSpecs:payload
            }
        }       
        default:{
            return state
        }
    }
}