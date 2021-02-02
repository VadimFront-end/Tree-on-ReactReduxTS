import initialState from "../initialState";
import {IAction, state, vert} from "../../interfaces";
import ADD_RIGHT_VERT from "../actions/ADD_RIGTH_VERT";
import ADD_LEFT_VERT from "../actions/ADD_LEFT_VERT";

const addNewLvL = (count: number): vert[] => {
    const newLvL: vert[] = [];
    for(let i = 0; i < 2**count; i++)
        newLvL.push({
            id: 2**count + i,
            lvl: count,
            indexVert: i,
            isCreated: false,
            left: false,
            right: false
        });
    return newLvL;
}

export default function reducer(state = initialState, action: IAction): state {
    switch(action.type) {
        case ADD_RIGHT_VERT: {
            const tmpTree = state.tree;
            if(state.lvlTree === action.value.lvl)
                tmpTree.push(addNewLvL(state.lvlTree + 1));
            tmpTree[action.value.lvl][action.value.indexVert].right = true;
            tmpTree[action.value.lvl + 1][action.value.indexVert * 2 + 1].isCreated = true;
            return {
                ...state,
                tree: [...tmpTree],
                lvlTree: state.lvlTree === action.value.lvl ? state.lvlTree + 1: state.lvlTree
            }
        }
        case ADD_LEFT_VERT: {
            const tmpTree = state.tree;
            if(state.lvlTree === action.value.lvl)
                tmpTree.push(addNewLvL(state.lvlTree + 1));
            tmpTree[action.value.lvl][action.value.indexVert].left = true;
            tmpTree[action.value.lvl + 1][action.value.indexVert * 2].isCreated = true;
            return {
                ...state,
                tree: [...tmpTree],
                lvlTree: state.lvlTree === action.value.lvl ? state.lvlTree + 1: state.lvlTree
            }
        }
        default: return state;
    }
}
