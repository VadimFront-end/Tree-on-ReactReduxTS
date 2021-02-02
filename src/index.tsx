import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {connect, Provider} from 'react-redux'
import store from './store/store';
import {state} from './interfaces'
import {bindActionCreators, Dispatch} from "redux";
import ADD_RIGHT_VERT from "./store/actionCreators/ADD_RIGHT_VERT";

const mapStateToProps = (state: state) => state;
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        add_right_vert: bindActionCreators(ADD_RIGHT_VERT, dispatch)
    }
}

const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <WrappedComponent />
    </Provider>, document.getElementById('root')
);
reportWebVitals();
