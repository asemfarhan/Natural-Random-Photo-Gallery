
const intialState ={
    searchField:''
}

export const searchChange= (state=intialState, action={})=>{
    switch (action.type)
    {
        case 'CHANGE_SEARCH_FIELD':
        return Object.assign({}, state , { searchField : action.payload } );
        default:
        return state;
    }
         
}