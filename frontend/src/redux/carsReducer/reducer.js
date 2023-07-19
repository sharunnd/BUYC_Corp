import { CARS_DELETE_SUCCESS, CARS_FAILURE, CARS_REQUEST, CARS_SUCCESS} from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    allCars:[],
    refreshPage:false
    
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
        case CARS_DELETE_SUCCESS:{
            return {
                ...state,isLoading:false,refreshPage:true
            }
        }      
        default:{
            return state
        }
    }
}