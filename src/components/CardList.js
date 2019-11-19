import React from 'react';
import Cards from './Cards';
 
 
const CardList= ({arr})=>
 {   return (
        <div className="center  tc  ">
        { arr.map((x , i)=>{
                    return (< Cards
                            key={i}
                            name={arr[i].name}
                            email={arr[i].email} 
                            id={arr[i].id} 
                            />
                        );
                    }   
                 )
        }
      </div>);
};

export default CardList;
