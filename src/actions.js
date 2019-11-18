import {CHANGE_SEARCH_FIELD} from './constans.js';

export const setSearchField= (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text})
