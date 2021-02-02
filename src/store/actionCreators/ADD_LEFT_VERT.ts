import ADD_LEFT_VERT from "../actions/ADD_LEFT_VERT";
import {IAction, vert} from "../../interfaces";

function add_left_vert(value: vert): IAction {
    return {
        type: ADD_LEFT_VERT,
        value
    };
}

export default add_left_vert;
