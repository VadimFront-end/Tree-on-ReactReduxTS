import {ActionType} from "../../interfaces";
import DELETE_VERT from "../actions/DELETE_VERT";

function delete_vert(value: number): ActionType {
    return {
        type: DELETE_VERT,
        value
    };
}

export default delete_vert;
