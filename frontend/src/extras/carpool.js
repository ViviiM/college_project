import React from 'react'
import { Link } from 'react-router-dom'

const   carpool = () => {
  return (
    <div>
        <h1 className='head'>Carpool For Planet</h1><br/>
        <div className='description'>Join 1,000,000+ people who carpool between cities in Canada.<Link to='/signup'> Free sign up</Link></div><br/>
        <Link className='startbtn' to='/signup' >Get Started</Link> 
    </div>
  )
}

export default carpool