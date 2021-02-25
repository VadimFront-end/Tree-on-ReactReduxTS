import {TActionType} from "../interfaces";
import {ADD_LEFT_VERT, ADD_RIGHT_VERT, DELETE_VERT} from "./actionTypes";

export const add_right_vert = (value: number): TActionType  => {
    return {
        type: ADD_RIGHT_VERT,
        value
    };
}

export const add_left_vert = (value: number): TActionType => {
    return {
        type: ADD_LEFT_VERT,
        value
    };
}

export const delete_vert = (value: number): TActionType => {
    return {
        type: DELETE_VERT,
        value
    };
}
