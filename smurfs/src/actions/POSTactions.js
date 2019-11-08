import axios from "axios";



export const POST_NEW_SMURF = "POST_NEW_SMURF"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"
export const POST_SMURF_START = "POST_SMURF_START"

const addsmurfSuccess = smurf => ({
    type: POST_SMURF_SUCCESS,
    payload: {
      ...smurf
    }
  });


export function postNewSmurf({ name, age, height}) {
    // console.log("Hello")
    return dispatch =>{
        console.log("Hello")
        // dispatch({type: POST_SMURF_START});
        axios
        .post("http://localhost:3333/smurfs", {
            name: name,
            age: age,
            height: height
        } )
        .then(response => {
            console.log("we are inside")        
                dispatch(addsmurfSuccess(response.data))
                 
        
        .catch(error => { console.log(error)
            dispatch({type: POST_SMURF_FAILURE, payload: error})
        });
    })
}
}
