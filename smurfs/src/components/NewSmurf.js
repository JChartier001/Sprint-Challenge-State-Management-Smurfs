import React, {useState} from "react";
import {connect} from "react-redux";
import { postNewSmurf } from "../actions/POSTactions";


export const NewSmurf=(props) =>{
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: null,
        height: ""
    })
    console.log("TCL: NewSmurf -> newSmurf", newSmurf)


const handleInputChange = e =>{
    setNewSmurf({...newSmurf,
        [e.target.name]: e.target.value})
    
}

const handleSubmit = e =>{
    e.preventDefault();
    console.log(newSmurf)
    postNewSmurf(newSmurf);
    
}
return (
    
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Add a new Smurf Member</h2>
            <label htmlFor="name" >Smurf Name: </label>
            <input type="text" name="name" placeholder="Enter Smurf Name" onChange={handleInputChange}/>
            <label htmlFor="age">Smurf Age: </label>
            <input type="text" name="age" placeholder="Enter Smurf Age" onChange={handleInputChange}/>
            <label htmlFor="height">Smurf Height: </label>
            <input type="text" name="height" placeholder="Enter Smurf Height" onChange={handleInputChange}/>
            <button type="submit">Submit</button>
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