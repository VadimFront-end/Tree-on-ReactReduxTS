import {state} from '../interfaces';

const initialState: state = {
    tree: {
        id: 0,
        lvl: 0,
        left: null,
        right: null,
        parent: null
    },
    lvlTree: 0,
    id: 1
};

export default initialState;
