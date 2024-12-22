// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// ----------------------------------------------------------------

import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App! Chai</h1>
    </div>
  );
}


// const reactElement = {
//   type: 'a',
//   props:{
//       href: "https://google.com",
//       target:'_blank'
//   },
//   children: 'click here to visit the google '
// };

const anotheruser = "chlo ji ___ krle ab "

const reactElement = React.createElement(
  'a',
  {href:'https://google.com' , target :'_blank'},
  'click me to visit the google ',
   anotheruser


)

const anotherElement = (
  <a href= "https://facebook.com" target = '_blank' >visit google</a>
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {anotherElement}  
  // </StrictMode>

  <StrictMode>
  {reactElement}
  </StrictMode>
);
