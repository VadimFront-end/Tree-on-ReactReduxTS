import ADD_RIGHT_VERT from "../actions/ADD_RIGTH_VERT";
import {ActionType} from "../../interfaces";

function add_right_vert(value: number): ActionType {
    return {
        type: ADD_RIGHT_VERT,
        value
    };
}

export default add_right_vert;
