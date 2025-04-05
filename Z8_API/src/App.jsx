import React from 'react'
import { getPosts, getRandomuser} from './API'
import { useEffect , useState } from 'react'
import "./App.css"
import Postcard from './Components/Postcard'
import Usercard from './Components/Usercard'

const App = () => {
  const [data , setData]= useState(null);
  const [userData, setUserData]= useState(null)

  useEffect(()=>{
    getPosts().then((posts)=> setData(posts));
  },[]);

  useEffect (()=>{
    getRandomuser().then((user)=> setUserData(user.results[0]))
  },[]);

  const refresh = ()=>{
    getRandomuser().then((user)=> setUserData(user.results[0]))
  }

  

  return (
    
    <div className='App'>
      
      {
        userData &&  <Usercard data = {userData}/>
      }
      <button onClick={refresh}>refresh names</button>
      
      {
        data ? data.map((e)=><Postcard title= {e.title} body={e.body}/>) : <p>not a data</p>
      }
    </div>
  )
}

export default App