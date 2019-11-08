import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from "../actions/APIactions"
import { POST_NEW_SMURF } from "../actions/POSTactions";


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
        case POST_NEW_SMURF:
            return{
                ...state,
                smurfs: action.payload
            }
        default:
            return state
    }
}

