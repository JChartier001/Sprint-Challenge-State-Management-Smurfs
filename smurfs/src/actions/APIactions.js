import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"
export const POST_SMURF_START = "POST_SMURF_START"

export const fetchSmurfs =() =>{
    return dispatch => {
        dispatch({type: FETCH_SMURFS_START});
        axios
        .get("http://localhost:3333/smurfs")
        .then(response => {
        // console.log("TCL: fetchSmurfs -> response", response)
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: FETCH_SMURFS_FAILURE, payload: error})
        });
    };
}

export function postNewSmurf({name, age, height}) {
    console.log(name, age, height)
    return dispatch =>{
        
      axios
        .post('http://localhost:3333/smurfs', {
            name: name,
            age: age,
            height: height
        })
        .then(response => {
            console.log("made it")
            dispatch({type: POST_SMURF_SUCCESS, payload: response.data})
            axios
            .get("http://localhost:3333/smurfs")
            .then(response => {
            // console.log("TCL: fetchSmurfs -> response", response)
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data})
            })
            .catch(error => {
                dispatch({type: FETCH_SMURFS_FAILURE, payload: error})
            });
        })
    .catch(error =>{
        dispatch({type: POST_SMURF_FAILURE, payload: error})
    });
};
}