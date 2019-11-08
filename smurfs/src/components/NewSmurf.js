import React from "react";
import {connect} from "react-redux";


const NewSmurf = () =>{
    return (
        <div>
            <form>
                <h2>Add a new Smurf Member</h2>
                <label htmlFor="newSmurfName">Smurf Name: </label>
                <input type="text" name="newSmurfName" placeholder="Enter Smurf Name"/>
                <label htmlFor="newSmurfAge">Smurf Age: </label>
                <input type="text" name="newSmurfAge" placeholder="Enter Smurf Age"/>
                <label htmlFor="newSmurfHeight">Smurf Height: </label>
                <input type="text" name="newSmurfHeight" placeholder="Enter Smurf Height"/>
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