import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware,  combineReducers} from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import {searchChange_R, requestPhoto_R } from './reducers' ;
import 'tachyons';
import App from './containers/app';


const logger = createLogger();
const rootReducer= combineReducers({searchChange_R, requestPhoto_R  }); 
const store =
                createStore( rootReducer , applyMiddleware(thunkMiddleware, logger));

ReactDOM.render( 
                    <Provider store ={store}>
                        < App />
                    </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
