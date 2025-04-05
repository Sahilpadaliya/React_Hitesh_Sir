import React from "react";

const Usercard=(props)=>{
    console.log(props.data);
    return (
     <div className="Usercard">
        <img className="user-img"></img>
        <h3>{props.data.name.first}</h3>
        <p>{props.data.phone}</p>
        <p>{props.data.location.city},{props.data.location.city}</p>
     </div>
    );
};
export default Usercard;


// used random user api for random name finding