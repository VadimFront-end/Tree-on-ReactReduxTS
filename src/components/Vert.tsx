import {ActionType, vert} from "../interfaces";
import React from "react";
import {bindActionCreators, Dispatch} from "redux";
import ADD_RIGHT_VERT from "../store/actionCreators/ADD_RIGHT_VERT";
import ADD_LEFT_VERT from "../store/actionCreators/ADD_LEFT_VERT";
import DELETE_VERT from "../store/actionCreators/DELETE_VERT";
import {connect} from "react-redux";

export type props = {
    vert: vert,
    add_right_vert(vert: number): ActionType,
    add_left_vert(vert: number): ActionType,
    delete_vert(vert: number): ActionType
}

const Vert = ({vert, add_right_vert, add_left_vert, delete_vert}: props) => {
    return (
        <div style={{width: vert.lvl === 0 ? '100%': '50%'}}>
            <div className="vert-wrapper">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div className="vert">{vert.id}
                        <div style={{cursor: "pointer", display: vert.id === 0 ? 'none': ''}} onClick={() => delete_vert(vert.id)} >&#9746;</div>
                    </div>
                    <div>
                        <button onClick={() => add_left_vert(vert.id)} style={{cursor: "pointer", visibility: vert.left ? 'hidden': 'visible'}}>L</button>
                        <button onClick={() => add_right_vert(vert.id)} style={{cursor: "pointer", visibility: vert.right ? 'hidden': 'visible'}}>R</button>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                {vert.left ? <Vert vert={vert.left} add_right_vert={add_right_vert} add_left_vert={add_left_vert} delete_vert={delete_vert}/> : <div style={{width: '50%'}}></div>}
                {vert.right ? <Vert vert={vert.right} add_left_vert={add_left_vert} add_right_vert={add_right_vert} delete_vert={delete_vert}/> : <div style={{width: '50%'}}></div>}
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        add_right_vert: bindActionCreators(ADD_RIGHT_VERT, dispatch),
        add_left_vert: bindActionCreators(ADD_LEFT_VERT, dispatch),
        delete_vert: bindActionCreators(DELETE_VERT, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Vert);
