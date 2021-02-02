import {state} from '../interfaces';

const initialState: state = {
    tree: [
        [
            {
                id: 1,
                indexVert: 0,
                lvl: 0,
                isCreated: true,
                right: false,
                left: false
            }
        ]
    ],
    lvlTree: 0
};

export default initialState;
