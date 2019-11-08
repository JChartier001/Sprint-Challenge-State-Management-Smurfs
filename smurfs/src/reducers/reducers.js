import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from "../actions/APIactions"
import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";

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
                error: true
            };
        default:
            return state
    }
}

