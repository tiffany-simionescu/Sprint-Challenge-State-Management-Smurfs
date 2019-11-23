import React from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfVillage from './SmurfVillage';
import axios from 'axios';

const App = () => {
  axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
        })
        .catch(err => {
          console.log(err);
        })

    return (
      <div className="App">
        <h1>Welcome to Smurf Village</h1>
        {/* <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <SmurfForm />
        <SmurfVillage />
      </div>
    );
  }


export default App;
