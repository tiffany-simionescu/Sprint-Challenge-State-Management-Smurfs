import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurfInfo } from '../actions';

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurfInfo(newSmurf);
    setNewSmurf({
      name: '',
      age: '',
      height: ''
    })
  }

  const handleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChanges}
          value={newSmurf.name}
        />
        <input 
          name="age"
          type="text"
          placeholder="Age"
          onChange={handleChanges}
          value={newSmurf.age}
        />
        <input 
          name="height"
          type="text"
          placeholder="Height"
          onChange={handleChanges}
          value={newSmurf.height}
        />
        <button type="submit">Submit Your Smurf</button>
      </form>
    </div>
  )
}

export default connect(null, { addSmurfInfo })(SmurfForm)