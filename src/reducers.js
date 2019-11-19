import {
    CHANGE_SEARCH_FIELD,
    REQUEST_PHOTO_PENDING,
    REQUEST_PHOTO_SUCCESS,
    REQUEST_PHOTO_FAILED,
                             } from './constans.js';


const intialState ={
    searchFieldText_R : '',
    isPending : false ,
    photo : [],
    error : ''

}

export const searchChange_R= (state=intialState, action={})=>{
    switch (action.type)
    {
        case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state , { searchFieldText_R : action.payload } );
        default:
        return state;
    }    
}


export const requestPhoto_R= (state=intialState, action={})=>{
    switch (action.type)
    {
        case REQUEST_PHOTO_PENDING:
            return Object.assign({}, state , { isPending :  true} );  
        case REQUEST_PHOTO_SUCCESS:
            return Object.assign({}, state , { photo: action.payload , isPending :  false} ); 
        case REQUEST_PHOTO_FAILED:
            return {...state , error: action.payload , isPending :  false }; //...
        default:
            return state;
    }
}