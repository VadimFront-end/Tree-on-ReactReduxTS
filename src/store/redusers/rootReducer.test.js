import reducer from "./rootReducer";
import {add_right_vert} from "../actions";
import initialState from "../initialState";

it('right vert has been added', () => {
    const newTree = reducer(initialState, add_right_vert(0));
    expect(newTree.id).toBe(2);
    const tmp = {
        id: 0,
        lvl: 0,
        left: null,
        right: null,
        parent: null
    }
    const tmp2 = {
        id: 1,
        lvl: 1,
        left: null,
        right: null,
        parent: tmp
    }
    tmp.right = tmp2;
    expect(newTree.tree).toBe(tmp);
})
