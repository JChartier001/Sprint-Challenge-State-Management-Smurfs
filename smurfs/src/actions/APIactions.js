import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE"

export const fetchSmurfs =() =>{
    return dispatch => {
        dispatch({type: FETCH_SMURFS_START});
        axios
        .get("http://localhost:3333/smurfs")
        .then(response => {
        console.log("TCL: fetchSmurfs -> response", response)
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: FETCH_SMURFS_FAILURE, payload: error})
        });
    };
}
