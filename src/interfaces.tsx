import ADD_RIGHT_VERT from "./store/actions/ADD_RIGTH_VERT";
import ADD_LEFT_VERT from "./store/actions/ADD_LEFT_VERT";
import DELETE_VERT from "./store/actions/DELETE_VERT";

export interface vert {
    id: number,
    left: vert | null,
    right: vert | null,
    lvl: number,
    parent: vert | null
}

export interface state {
    tree: vert,
    lvlTree: number,
    id: number
}

///for actions

export interface IAction {
    type: typeof ADD_RIGHT_VERT | typeof ADD_LEFT_VERT | typeof DELETE_VERT,
    value: number
}

export type ActionType = IAction;
