import React from 'react'
import { Link } from 'react-router-dom'
import './UseEffectEx.css';
const ShowAssignments = () => {
  return (
    <>
    <h1 style={{textAlign: 'center'}}>React Router DOM</h1>
    <Link to="/first"><p>First</p></Link>
    <Link to="/login"><p>Login</p></Link>
    <Link to="/usestate"><p>UseStateEx</p></Link>
    <Link to="/useeffect"><p>UseEffectEx</p></Link>
    </>
  )
}

export default ShowAssignments