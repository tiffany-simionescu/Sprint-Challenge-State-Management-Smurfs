import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { getSmurfInfo } from "../actions";

const SmurfVillage = (props) => {

    useEffect(() => {
        props.getSmurfInfo()
    }, [])

    return (
        <div>
            {props.smurfs.map(smurf => {
                return <SmurfCard smurf={smurf} key={smurf.id} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfInfo })(SmurfVillage)