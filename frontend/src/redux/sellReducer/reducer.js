import { SELL_FAILURE, SELL_POST_SUCCESS, SELL_REQUEST } from "./actionTypes"


const initialState = {
    isLoading:false,
    isError:false,
    allCars:[]
    
}


export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case SELL_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case SELL_FAILURE:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        
        case SELL_POST_SUCCESS:{
            return {
                ...state,isLoading:false
            }
        }       
        default:{
            return state
        }
    }
}