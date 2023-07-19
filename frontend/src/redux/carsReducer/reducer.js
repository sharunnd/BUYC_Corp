import { CARS_FAILURE, CARS_REQUEST, CARS_SUCCESS} from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    allCars:[]
    
}


export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case CARS_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case CARS_FAILURE:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        
        case CARS_SUCCESS:{
            return {
                ...state,isLoading:false,allCars:payload
            }
        }       
        default:{
            return state
        }
    }
}