//import {CHANGE_SEARCH_FIELD} from './constans.js';

const intialState ={
    searchField:''
}

export const searchChange= (state=intialState, action={})=>{
    console.log("reduce",state);
    console.log(action.type);
    switch (action.type)
    {
        case 'CHANGE_SEARCH_FIELD':
        return Object.assign({}, state , { searchField : action.payload } );
        default:
        return state;
    }
         
}