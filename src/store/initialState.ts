import {IState} from '../interfaces';

const initialState: IState = {
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
