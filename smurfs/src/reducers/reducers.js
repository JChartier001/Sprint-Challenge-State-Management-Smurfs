import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from "../actions/APIactions"
import { POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE } from "../actions/POSTactions";


export const initialState = {
    smurfs: null,
    isLoading: false,
    error: null

}

export function reducers(state=initialState, action) {
    switch(action.type) {
        case FETCH_SMURFS_START:
        return {
            ...state,
            isLoading: true
        };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };        
        case POST_SMURF_SUCCESS:
                console.log("Post success")
            return {
                ...state,
                isLoading: false,
                smurfs: [...state.smurfs, action.payload]            
            }
        case POST_SMURF_START:
            console.log("Post start")
            return{
                ...state,
                isLoading: true
            }
            case POST_SMURF_FAILURE:
                console.log("Post failure")
                return{
                    ...state,
                    error: action.payload,
                    isLoading: false
                }
        default:
            return state
    }
}

