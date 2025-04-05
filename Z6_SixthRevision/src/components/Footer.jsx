import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

const Footer = () => {
  const data = useContext(DataContext)
  return (
    <div>Footer {data.age}</div>
  )
}

export default Footer