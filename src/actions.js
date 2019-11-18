import {CHANGE_SEARCH_FIELD} from './constans.js';

export const setSearchField= (text) =>
{    
    console.log(text);
        return{    
        type: CHANGE_SEARCH_FIELD,
        payload: text
        }
}