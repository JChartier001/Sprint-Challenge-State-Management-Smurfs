import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"
export const POST_SMURF_START = "POST_SMURF_START"
export const DELETING_SMURFS_START = "DELETING_SMURFS"
export const DELETING_SMURFS_SUCCESS = "DELETING_SMURFS_SUCCESS"
export const DELETING_SMURFS_FAILURE = "DELETING_SMURFS_FAILURE"
export const EDITING_SMURFS_SUCCESS = "EDITING_SMURFS_SUCCESS"
export const EDITING_SMURFS_FAILURE = "EDITING_SMURFS_FAILURE"

export const fetchSmurfs =() =>{
    return dispatch => {
        dispatch({type: FETCH_SMURFS_START});
        axios
        .get("http://localhost:3333/smurfs")
        .then(response => {
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
export function editSmurf(id, data) {
    
    return dispatch =>{
      axios
        .put(`http://localhost:3333/smurfs/${id}`, data)
        .then(response => {
            console.log("made it")
            dispatch({type: EDITING_SMURFS_SUCCESS, payload: response.data})
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
        dispatch({type: EDITING_SMURFS_FAILURE, payload: error})
    });
};
}

export function deleteSmurf(id) {
    
    return dispatch =>{
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
            console.log("made it")
            dispatch({type: DELETING_SMURFS_SUCCESS, payload: response.data})
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
        dispatch({type: DELETING_SMURFS_FAILURE, payload: error})
    });
};
}

