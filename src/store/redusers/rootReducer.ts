import initialState from "../initialState";
import {TActionType, IState, IVert} from "../../interfaces";
import {ADD_RIGHT_VERT, ADD_LEFT_VERT, DELETE_VERT} from "../actionTypes";

const findVert = (vert:IVert | null, id: number): IVert | null => {
    if (!vert) return null;
    if (vert.id === id) return vert;
    return findVert(vert.left, id) || findVert(vert.right, id);
}

export default function reducer(state = initialState, action: TActionType): IState {
    switch (action.type) {
        case ADD_RIGHT_VERT: {
            const vert = findVert(state.tree, action.value);
            console.log(vert)
            vert!.right = {
                parent: vert,
                id: state.id,
                left: null,
                right: null,
                lvl: vert!.lvl + 1
            }
            return {
                ...state,
                id: state.id + 1,
                tree: {...state.tree},
                lvlTree: vert && vert.right!.lvl > state.lvlTree ? state.lvlTree + 1 : state.lvlTree
            }
        }
        case ADD_LEFT_VERT: {
            const vert = findVert(state.tree, action.value);
            vert!.left = {
                parent: vert,
                id: state.id,
                left: null,
                right: null,
                lvl: vert!.lvl + 1
            }
            return {
                ...state,
                id: state.id + 1,
                tree: {...state.tree},
                lvlTree: vert && vert.left!.lvl > state.lvlTree ? state.lvlTree + 1 : state.lvlTree
            }
        }
        case DELETE_VERT: {
            const vert = findVert(state.tree, action.value);
            console.log(vert!.parent!.left === vert, vert!.parent!.right === vert)
            if(vert!.parent!.left === vert) {
                if(!vert!.parent!.lvl) state.tree.left = null;//костыль
                vert!.parent!.left = null;
            }
            else {
                if(!vert!.parent!.lvl) state.tree.right = null;//костыль
                vert!.parent!.right = null;
            }
            return {
                ...state,
                tree: {...state.tree}
            }
        }
        default:
            return state;
    }
}
