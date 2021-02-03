import React, {useState} from 'react';
import {IAction, state, vert} from "../interfaces";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import ADD_RIGHT_VERT from "../store/actionCreators/ADD_RIGHT_VERT";
import ADD_LEFT_VERT from "../store/actionCreators/ADD_LEFT_VERT";
import DELETE_VERT from "../store/actionCreators/DELETE_VERT";

export type props = {
    vert: vert,
    add_right_vert(vert: vert): IAction,
    add_left_vert(vert: vert): IAction,
    delete_vert(vert: vert): IAction
}

const Vert = ({vert, add_right_vert, add_left_vert, delete_vert}: props) => {
    let [isShow, setIsShow] = useState<boolean>(false);
    return (
        <div className="vert-wrapper" style={{visibility: vert.isCreated ? 'visible' : 'hidden',
                                            width: 100 / (vert.lvl + 1) + '%'}}>
            <div
                className="vert"
                onMouseMove={() => setIsShow(true)}
                onMouseOut={() => setIsShow(false)}
            >{ vert.id }
                <div
                    onClick={() => delete_vert(vert)}
                    style={{display: (vert.id !== 1) && isShow ? 'block': 'none', cursor: 'pointer'}}
                >&#9746;
                </div>
            </div>
            <div>
                <button
                    onClick={() => add_left_vert(vert)}
                    style={{visibility: !vert.left && vert.isCreated ?  'visible' : 'hidden'}}
                >L
                </button>
                <button
                    onClick={() => add_right_vert(vert)}
                    style={{visibility: !vert.right && vert.isCreated ?  'visible' : 'hidden'}}
                >R
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state: state) => state;
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        add_right_vert: bindActionCreators(ADD_RIGHT_VERT, dispatch),
        add_left_vert: bindActionCreators(ADD_LEFT_VERT, dispatch),
        delete_vert: bindActionCreators(DELETE_VERT, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vert);

