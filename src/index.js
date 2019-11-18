import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore} from 'redux';
import './index.css';
import {searchChange} from './reducers' ;
import 'tachyons';
import App from './containers/app';

const store =createStore(searchChange);

ReactDOM.render( <Provider store ={store}>
                    < App />
                </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
