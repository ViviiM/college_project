import React, { useEffect, useState , useContext } from 'react'
import { useData } from '../context/DataContext'
import img from './Layout/icon.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import { UserContext } from '../context/UserAuthContext'
const Profile = () => {
  const {username , useremail , init } = useContext(UserContext);
  return (
    <div className="container profile" >
      <hr />
      <td className='profileimage'>{init}</td>
      <td className='profilehead'><h1>{username}'s Profile</h1></td>
      <p style={{ marginLeft: '1rem' }}>{useremail}</p>
      <hr />
      <h2 className='profileverify'>Verifications</h2>
      <td className='emailverify'><h4><i class="fa fa-inbox" aria-hidden="true"></i> Email Adress <Link>Verify</Link>
      </h4>
      </td>
      <td className='phoneverify'><h4><i class="fa fa-mobile" aria-hidden="true"></i> Phone <Link>Verify</Link>
      </h4>
      </td>
      <div className='profileverify' style={{ marginTop: '0.5rem' }}></div>
    </div>
  )
}

export default Profile