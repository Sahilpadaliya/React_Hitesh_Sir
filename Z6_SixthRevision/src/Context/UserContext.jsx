import React,{createContext} from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {

    // const username = 'krishna ji'

    // -----creating the object 

    const userdata={
      username:"sahil",
      age:22,
      city:"Rajnandgaon"
    }
  return (

    <div>

    <DataContext.Provider value={userdata}>
    <h1>UserContext hai ji </h1>
    {children}
    </DataContext.Provider>
  

    </div>
  )
}

export default UserContext