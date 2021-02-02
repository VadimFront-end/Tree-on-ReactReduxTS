import { createStore } from 'redux';
import reducer from './redusers/rootReducer';

const store = createStore(reducer);

export default store;
