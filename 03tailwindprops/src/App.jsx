// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//        <h1 className="bg-green-400 text-black p-4 rounded-xl">hare krishna</h1>
//        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
//   <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
//   <div class="pt-6 space-y-4">
//     <blockquote>
//       <p class="text-lg font-medium">
//         “Tailwind CSS is the only framework that I've seen scale
//         on large teams. It’s easy to customize, adapts to any design,
//         and the build size is tiny.”
//       </p>
//     </blockquote>
//     <figcaption class="font-medium">
//       <div>Sarah Dayan</div>
//       <div>Staff Engineer, Algolia</div>
//     </figcaption>
//   </div>
// </figure>

//     </>
//   )
// }

// export default App


// -------------------------------------------------------------------------

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './Components/Card'

// function App() {
//   const [count, setCount] = useState(0)
//   let myobj= {
//     username : "sahil",
//     age:"22"
//   }
//   let myArr = [1,2,3,4,5,6,7,8,9]


//   return (
//     <>
//        <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">hare krishna</h1>
//        <Card channel="jai shree hari" someobje={myobj}/>
//        <Card  channel="jai mata di " someobj={myArr}/>
//     </>
//   )
// }

// export default App


// ---------------------------------------------------------------------------------

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj= {
    username : "sahil",
    age:"22"
  }
  let myArr = [1,2,3,4,5,6,7,8,9]


  return (
    <>
       <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">hare krishna</h1>
       <Card username="jai shree hari" btntext ="click me" />
       <Card username1="jai mata di " />
    </>
  )
}

export default App
