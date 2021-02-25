import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {connect, Provider} from 'react-redux'
import store from './store/store';
import {IState} from './interfaces'

const mapStateToProps = (state: IState) => state;

const WrappedComponent = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <WrappedComponent />
    </Provider>, document.getElementById('root')
);
reportWebVitals();
