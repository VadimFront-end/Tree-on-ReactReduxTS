import {ADD_RIGHT_VERT, ADD_LEFT_VERT, DELETE_VERT} from "./store/actionTypes";

export interface IVert {
    id: number,
    left: IVert | null,
    right: IVert | null,
    lvl: number,
    parent: IVert | null
}

export interface IState {
    tree: IVert,
    lvlTree: number,
    id: number
}

///for actions

export interface IAction {
    type: typeof ADD_RIGHT_VERT | typeof ADD_LEFT_VERT | typeof DELETE_VERT,
    value: number
}

export type TActionType = IAction;
