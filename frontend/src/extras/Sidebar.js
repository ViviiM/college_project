import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="dropdown-menu" style={{right:"-4rem"}}>
    <ul ><li>  </li>
      <li><Link to="/myprofile">My Profile</Link></li><hr/>
      <li><Link to ='/passenger'>For Passengers</Link></li><hr/>
      <li><Link to='/refer'>Refer a friend</Link></li><hr/>
      <li><Link to='/about'>About Poparide</Link></li><hr/>
      <li><Link to='/help'>Help</Link></li><hr/>
      <li><Link to='/'>Logout <i class="fa fa-long-arrow-left" aria-hidden="true"></i></Link></li><hr/>
      <li><Link to='/' style={{color:'red'}}>Close Account</Link></li>
    </ul>
  </div>
  )
}

export default Sidebar