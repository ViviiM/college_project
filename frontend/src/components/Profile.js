import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import img from './Layout/icon.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const Profile = () => {
  const { globaldata } = useData()
  const { isLoggedIn } = useAuth();
  const [alphabet, setalphabet] = useState('V')
  const [email, setemail] = useState('vivek@gmail.com')

  const [getdata, setgetdata] = useState([])
  useEffect(() => {
    if (isLoggedIn) {
      try {
        axios.get('http://127.0.0.1:8000/user_data/login_data/', { params: globaldata }).then((res) => { console.log("Then", res.data); setgetdata(res.data) }).catch((error) => { console.log(error); })
      } catch (error) {
        console.log(error);
      }
    }
  }, [isLoggedIn])

  console.log("Get Response", getdata);
  const [first_name,setfirst_name] = useState([])
  useEffect(()=>{
    if (getdata.length != 0) {
      const first = getdata.replace(/'/g, '"');
      let result = JSON.parse(first);
      setfirst_name([...result,])
      console.log(result);
      first_name.map((val)=>{console.log(val)});
    }
  },[])
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