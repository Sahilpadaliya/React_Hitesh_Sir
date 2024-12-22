// import React,{ useState } from 'react'  ---- ye react bhi aise import kraya ja sakta hai
//                                          hooks mai
import { useState } from "react"; // lekin bina react import kiye sirf hook omport kr rahe hai
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   let [counter, setCounter] = useState(15);
//   // let counter = 15
//   const addvalue = () => {
//     counter = counter + 1;
//     setCounter(counter); // or setCounter(counter+1)
//     // console.log("value added ", Math.random());  time pass ke liye likha gya hai
//     console.log("clicked ", counter);
  // };   ye bhi sahi chlega lekin yaha pe extra chije thi isliye hi comment kra gya hai 

function App() {
  let [counter, setCounter] = useState(15);
  // const addvalue = () => {
  //   counter = counter + 1;
  //   setCounter(counter); 
  //   console.log("clicked ", counter);
  // };
const addvalue=()=>{
  if (counter < 20) {
    const newCounter = counter + 1; // Increment the counter value
    setCounter(newCounter);
    console.log("clicked ", newCounter);
  } else {
    console.log("Counter value cannot exceed 20");
  }
};

  const removevalue = () => {
    if(counter>0){
     const newCounter = counter-1;
     setCounter (newCounter);
    }
    else{
      console.log("counter touched zero ");
    }

  };

  // const removevalue = () => {
  //   if (counter > 0) {
  //     const newCounter = counter - 1; // Decrement the counter value
  //     setCounter(newCounter);
  //     console.log("clicked ", newCounter);
  //   } else {
  //     console.log("Counter touched zero");
  //   }
  // };

  return (
    <>
      <h1> Chai Aur React {counter} </h1>
      <h2> Counter Value : {counter}</h2>

      <button onClick={addvalue}> Add value {counter} </button>
      <br />
      <button onClick={removevalue}> remove value {counter}</button>

      <p> footer : {counter}</p>
    </>
  );
}

export default App;
