import React, {useState} from "react";
import {connect} from "react-redux";

const EditSmurf = (props) =>{

    const [editedSmurf, setEditedSmurf] = useState({
        id: props.smurfs.id,
        name:props.smurfs.name,
        age:props.smurfs.age,
        height:props.smurfs.height
    })

const handleInputChange = e =>{
setEditedSmurf({[event.target.name]:event.target.value})
}
handleSubmit = e =>{
event.preventDefault();
props.editSmurf(props.id, {
    name: props.name,
    age: props.age,
    height: props.height
})
 setEditedSmurf({
    id: '',
    name: '',
    age: '',
    height: ''     
 })
}

return(
    <form onSubmit={handleSubmit}>
        <p>Name</p><input name='name' onChange={handleInputChange} placeholder='Name' value ={props.name}></input>
        <p>Age</p><input name='age' onChange={handleInputChange} placeholder='Age' value ={props.age}></input>
        <p>Height</p><input name='height' onChange={handleInputChange} placeholder='Height' value={props.height}></input>
        <button>Submit Smurf</button>
    </form>
)
}
function mapStateToProps(state){
    smurfs: state.smurfs
}

const mapDispatchToProps = {
    editSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSmurf);
