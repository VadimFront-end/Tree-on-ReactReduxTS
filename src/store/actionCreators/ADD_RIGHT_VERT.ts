import ADD_RIGHT_VERT from "../actions/ADD_RIGTH_VERT";
import {IAction, vert} from "../../interfaces";

function add_right_vert(value: vert): IAction {
    return {
        type: ADD_RIGHT_VERT,
        value
    };
}

export default add_right_vert;
