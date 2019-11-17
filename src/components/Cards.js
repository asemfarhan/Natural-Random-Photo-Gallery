import React from 'react';
// /             <div  className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">

let Cards= ({name , email , id})=>{
    return(
    <div  className=" mw5 tc link dib dim pa4 ma4 br3 shadow-5 ">
                <img className="br-1 grow br-100  shadow-5 "
                src= {`https://picsum.photos/id/${Math.floor((Math.random() * 100))}/200/200`}  
                alt="photo1" ></img>
                <div>
                      <h4>{name}</h4>
                      <p>{email}</p>
                      {/* <p>{id}</p> */}
                </div>
      </div>
);
}

export default Cards;