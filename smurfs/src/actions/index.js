import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';

export const getSmurfInfo = () => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err })
    })
}

export const addSmurfInfo = smurf => dispatch => {
  axios
    .get('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADDING_SMURF_SUCCESS, payload: res })
    })
    .catch(err => {
      dispatch({ type: ADDING_SMURF_FAILURE, payload: err })
    })
}