import React, {useState} from "react";
import {connect} from "react-redux";
import { postNewSmurf } from "../actions/POSTactions";


export const NewSmurf=() =>{
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: null,
        height: ""
    })
    console.log("TCL: NewSmurf -> newSmurf", newSmurf)


const handleInputChange = e =>{
    setNewSmurf({[e.target.name]: e.target.value})
    
}

const handleSubmit = e =>{
    e.preventDefault();
    postNewSmurf();
}
return (
    
    <div>
        <form onClick={() => handleSubmit}>
            <h2>Add a new Smurf Member</h2>
            <label htmlFor="newSmurfName" >Smurf Name: </label>
            <input type="text" name="newSmurfName" placeholder="Enter Smurf Name" onChange={handleInputChange}/>
            <label htmlFor="newSmurfAge">Smurf Age: </label>
            <input type="text" name="newSmurfAge" placeholder="Enter Smurf Age" onChange={handleInputChange}/>
            <label htmlFor="newSmurfHeight">Smurf Height: </label>
            <input type="text" name="newSmurfHeight" placeholder="Enter Smurf Height" onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    </div>
)
}


   

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps)(NewSmurf);