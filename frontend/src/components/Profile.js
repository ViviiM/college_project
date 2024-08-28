import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import img from './Layout/icon.png'
import { Link } from 'react-router-dom'
const Profile = () => {
  const { globaldata } = useData()
  const [alphabet, setalphabet] = useState('V')
  const [email, setemail] = useState('vivek@gmail.com')
  return (
    <div className="container profile" >
      <hr />
      <td className='profileimage'>{alphabet}</td>
      <td className='profilehead'><h1>Vivek's Profile</h1></td>
      <p style={{ marginLeft: '1rem' }}>{email}</p>
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