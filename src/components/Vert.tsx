import {TActionType, IVert} from "../interfaces";
import React from "react";
import {bindActionCreators, Dispatch} from "redux";
import {add_right_vert, add_left_vert, delete_vert} from "../store/actions";
import {connect} from "react-redux";

export type props = {
    vert: IVert,
    add_right_vert(vert: number): TActionType,
    add_left_vert(vert: number): TActionType,
    delete_vert(vert: number): TActionType
}

export const Vert = ({vert, add_right_vert, add_left_vert, delete_vert}: props) => {
    return (
        <div style={{width: vert.lvl === 0 ? '100%' : '50%'}}>
            {
                vert.lvl !== 0 ? <div className="bw-lvl" style={{justifyContent: vert.parent!.left === vert ? 'flex-end': 'flex-start'}}>
                    <div className="arc" style={{transform: vert.parent!.left === vert ? `rotate(-${7*vert.lvl}deg)`: `rotate(${7*vert.lvl}deg)`, width: '50%'}}></div>
                </div>: ''
            }
            <div className="vert-wrapper">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div className="vert">{vert.id}
                        <div style={{cursor: "pointer", display: vert.id === 0 ? 'none' : ''}}
                             onClick={() => delete_vert(vert.id)}>&#9746;</div>
                    </div>
                    <div>
                        <button onClick={() => add_left_vert(vert.id)}
                                style={{cursor: "pointer", visibility: vert.left ? 'hidden' : 'visible'}}>L
                        </button>
                        <button onClick={() => add_right_vert(vert.id)}
                                style={{cursor: "pointer", visibility: vert.right ? 'hidden' : 'visible'}}>R
                        </button>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                {vert.left ? <Vert vert={vert.left} add_right_vert={add_right_vert} add_left_vert={add_left_vert}
                                   delete_vert={delete_vert}/> : <div style={{width: '50%'}}></div>}
                {vert.right ? <Vert vert={vert.right} add_left_vert={add_left_vert} add_right_vert={add_right_vert}
                                    delete_vert={delete_vert}/> : <div style={{width: '50%'}}></div>}
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        add_right_vert: bindActionCreators(add_right_vert, dispatch),
        add_left_vert: bindActionCreators(add_left_vert, dispatch),
        delete_vert: bindActionCreators(delete_vert, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Vert);
