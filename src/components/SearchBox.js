import React from 'react';

const SearchBox= ({searchField, searchChange})=>
{return (
    <div className=" center tc pa2  br3 ">
    <input className=" tc pa2 ba br-pill bg-washed-blue" 
    type="search" 
    placeholder="Search"
    onChange={searchChange}
    />
    </div>
)
}
export default SearchBox;
