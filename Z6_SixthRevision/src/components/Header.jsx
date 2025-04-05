import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

const Header = () => {
  const received = useContext(DataContext)
  return (
    <div>Header {received.city}</div>
  )
}

export default Header