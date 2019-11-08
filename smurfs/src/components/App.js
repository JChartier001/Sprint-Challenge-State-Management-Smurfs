import React, { useEffect } from "react";
import {connect} from "react-redux";
import SmurfCard from "../components/SmurfCard"
import {fetchSmurfs} from "../actions/APIactions";
import NewSmurf from "../components/NewSmurf"
import "./App.css";



function App (props) {
  useEffect(() =>{
    props.fetchSmurfs();
  }, [])
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        {props.error && <p>Error" {props.error}</p>}

        {props.isLoading ? 
        (
          <div>...Loading</div>
        ) : (
          <div>
          <SmurfCard />
          <NewSmurf/>
          </div>
        )}
      </div>
    )
  }
  
function mapStateToProps(state){
  console.log("App", state)
  return{
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs

  }
}

const mapDispathToProps = {
  fetchSmurfs
}

export default connect(mapStateToProps, mapDispathToProps)(App);
