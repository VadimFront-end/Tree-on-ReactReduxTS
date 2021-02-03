import initialState from "../initialState";
import {IAction, state, vert} from "../../interfaces";
import ADD_RIGHT_VERT from "../actions/ADD_RIGTH_VERT";
import ADD_LEFT_VERT from "../actions/ADD_LEFT_VERT";
import DELETE_VERT from "../actions/DELETE_VERT";

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
            const newVert: vert = {
                id: tmpTree[action.value.lvl + 1][action.value.indexVert * 2 + 1].id,
                left: false,
                isCreated: true,
                right: false,
                lvl: tmpTree[action.value.lvl + 1][action.value.indexVert * 2 + 1].lvl,
                indexVert: tmpTree[action.value.lvl + 1][action.value.indexVert * 2 + 1].indexVert,
            }
            tmpTree[action.value.lvl][action.value.indexVert].right = true;
            tmpTree[action.value.lvl + 1][action.value.indexVert * 2 + 1] = newVert;
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
            const newVert: vert = {
                id: tmpTree[action.value.lvl + 1][action.value.indexVert * 2].id,
                left: false,
                isCreated: true,
                right: false,
                lvl: tmpTree[action.value.lvl + 1][action.value.indexVert * 2].lvl,
                indexVert: tmpTree[action.value.lvl + 1][action.value.indexVert * 2].indexVert,
            }
            tmpTree[action.value.lvl][action.value.indexVert].left = true;
            tmpTree[action.value.lvl + 1][action.value.indexVert * 2] = newVert;
            return {
                ...state,
                tree: [...tmpTree],
                lvlTree: state.lvlTree === action.value.lvl ? state.lvlTree + 1: state.lvlTree
            }
        }
        case DELETE_VERT: {
            const tmpTree = state.tree;
            if(action.value.indexVert % 2)
                tmpTree[action.value.lvl - 1][(action.value.indexVert - 1) / 2].right = false;
            else
                tmpTree[action.value.lvl - 1][action.value.indexVert / 2].left = false;
            for(let i = action.value.lvl; i <= state.lvlTree; i++) {
                for(let j = 0; j < 2**(i - action.value.lvl); j++)
                    tmpTree[i][action.value.indexVert * 2**(i - action.value.lvl) + j].isCreated = false;
            }
            return {
                ...state,
                tree: [...tmpTree]
            }
        }
        default: return state;
    }
}
