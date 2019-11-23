import axios from "axios"

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START"
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS"
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE"

export const ADDING_SMURF_START = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE"

export const DELETE_SMURF_START = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE"

export const getSmurfInfo = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START })
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            // If App doesn't work add dispatch here
            dispatch({
                type: FETCHING_SMURFS_SUCCESS,
                payload: res
            })
        })
        // Add Dispatch here
        .catch(err => console.log(err))
}

export const addSmurfInfo = (smurf) => dispatch => {
    //dispatch({type: ADDING_SMURF_START})
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADDING_SMURF_SUCCESS,
                payload: res
            })
        })
        .catch(err => console.log(err))
        // Add dispatch here

}