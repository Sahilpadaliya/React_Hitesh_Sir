// import React from 'react'

// function Card(props){
//   console.log("props", props);
//     return (
//         <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
//         <img
//           src="https://images.pexels.com/photos/29664446/pexels-photo-29664446/free-photo-of-scenic-aerial-view-of-madeira-village.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//           alt=""
//           className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
//         />
//         <div className="mt-6 mb-2">
//           <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
//             Title
//           </span>
//           <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
//         </div>
//         <p className="text-gray-300">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
//           amet
//         </p>
//         <button className='bg-green-800 placeholder-slate-950  rounded-xxl'> visit me </button>
//       </div>

//     )
// }
// export default Card


// ------------------------------------------------------------------------------
import React from 'react'

// function Card(props){
//    console.log(props.username);
function Card({username , btntext = "visit me"}){        //----shortcut used for destructring (shortcut use kiya gya hai )
  console.log(username);
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
        <img
          src="https://images.pexels.com/photos/29664446/pexels-photo-29664446/free-photo-of-scenic-aerial-view-of-madeira-village.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className='bg-green-800 placeholder-slate-950  rounded-xxl'> {btntext} </button> 
      </div>

    )
}
export default Card


