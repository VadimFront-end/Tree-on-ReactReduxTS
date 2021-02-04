import initialState from "../initialState";
import {ActionType, state, vert} from "../../interfaces";
import ADD_RIGHT_VERT from "../actions/ADD_RIGTH_VERT";
import ADD_LEFT_VERT from "../actions/ADD_LEFT_VERT";
import DELETE_VERT from "../actions/DELETE_VERT";

const findVert = (vert: vert | null, id: number): vert | null => {
    if (!vert) return null;
    if (vert.id === id) return vert;
    return findVert(vert.left, id) || findVert(vert.right, id);
}

export default function reducer(state = initialState, action: ActionType): state {
    switch (action.type) {
        case ADD_RIGHT_VERT: {
            const vert = findVert(state.tree, action.value);
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
            if(vert!.parent!.left === vert)
                vert!.parent!.left = null;
            else
                vert!.parent!.right = null;
            return {
                ...state,
                tree: {...state.tree}
            }
        }
        default:
            return state;
    }
}
