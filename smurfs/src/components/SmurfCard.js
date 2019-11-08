import React from "react";
import {connect} from "react-redux";

function SmurfCard(props){
    return (
        <div className="smurf-wrapper" >
        {props.smurfs && props.smurfs.length!==0 ? props.smurfs.map(item => {
            return(
            <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
            </div>
    )}) : null
} 
</div>
    );
}


function mapStateToProps (state) {
console.log("TCL: mapStateToProps -> state", state)
    
    return{
        smurfs: state.smurfs
    }
}
   


export default connect(mapStateToProps)(SmurfCard);