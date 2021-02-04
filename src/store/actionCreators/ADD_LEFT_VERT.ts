import ADD_LEFT_VERT from "../actions/ADD_LEFT_VERT";
import {ActionType} from "../../interfaces";

function add_left_vert(value: number): ActionType {
    return {
        type: ADD_LEFT_VERT,
        value
    };
}

export default add_left_vert;
