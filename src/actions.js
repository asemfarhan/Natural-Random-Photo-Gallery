import {
    CHANGE_SEARCH_FIELD,
    REQUEST_PHOTO_PENDING,
    REQUEST_PHOTO_SUCCESS,
    REQUEST_PHOTO_FAILED,
                             } from './constans.js';

export const setField_A= (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text})

    
    export const requestPhoto_A= (dispatch) => {
        dispatch ({type: REQUEST_PHOTO_PENDING}) 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response  =>  response.json())
        .then( data =>  dispatch({type: REQUEST_PHOTO_SUCCESS , payload: data}) )
        .catch(error => dispatch({type: REQUEST_PHOTO_FAILED  , payload: error}))
    }
    