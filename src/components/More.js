import React from 'react';

const MoreButton= ({ xxx, moreBt_C})=>
{return (
    <button className=" tc pa2 ma4 br-pill" onChange={moreBt_C} onMouseOver={xxx} onClick={moreBt_C}>
    Click me
</button>  )
}
export default MoreButton;
