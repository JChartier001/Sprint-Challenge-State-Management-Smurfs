import axios from "axios";
import {FETCH_SMURFS_START, fetchSmurfs} from "./APIactions"
import { NewSmurf } from "../components/NewSmurf";


export const POST_NEW_SMURF = "POST_NEW_SMURF"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"




export function postNewSmurf({ name, age, height}) {
    return dispatch =>{
        dispatch({type: FETCH_SMURFS_START});
        axios
        .post("http://localhost:3333/smurfs", {
            name: NewSmurf.name,
            age: NewSmurf.age,
            heigh: NewSmurf.height
        } )
        .then(response => {
            setTimeout(() => {
                dispatch({type: POST_SMURF_SUCCESS, payload: response.data})
            })          
        
        .catch(error => {
            dispatch({type: POST_SMURF_FAILURE, payload: error})
        });
    })
}
}
