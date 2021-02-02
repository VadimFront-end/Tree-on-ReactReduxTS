import ADD_RIGHT_VERT from "./store/actions/ADD_RIGTH_VERT";
import ADD_LEFT_VERT from "./store/actions/ADD_LEFT_VERT";

export interface vert {
    id?: number,
    lvl: number,
    indexVert: number,
    isCreated: boolean,
    right: boolean,
    left: boolean
}

export interface state {
    tree: vert[][],
    lvlTree: number
}

///for actions

export interface IAdd_right_vert {
    type: typeof ADD_RIGHT_VERT,
    value: vert
}

export interface IAdd_left_vert {
    type: typeof ADD_LEFT_VERT,
    value: vert
}

export type IAction = IAdd_right_vert | IAdd_left_vert;
