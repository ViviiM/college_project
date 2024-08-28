
import React, { useState,createContext } from 'react'
import { Link,useNavigate } from "react-router-dom";
import Footer from '../components/Layout/Footer';
import axios from 'axios'
import Header from '../components/Layout/Header';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
const Signup = ({setuser}) => {
  const {login} = useAuth()
  const {setGlobalData} = useData();
  const navigate = useNavigate() 
  const [data, setData] = useState({
    exemail: '',
    expassword: ''
  })
  // const [details,setdetails] = useState("")

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // const history = 
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    // console.log(data);
  }

// const [count,setcount] = useState(0)
// console.log(count);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const flag = true
    setGlobalData(data)
    // console.log("submit",count);
    console.log(data);
    try {
      const response = await axios.post('/user_data/login/',{data :data});
      setSuccess(response.data.success);  
      console.log(success);
      setError('');
      login()
      // setdetails(response.data.userdata)
      // console.log("HEllo" ,details);
      // setuser(data.exemail)
      // setcount(count+1)
      // console.log("try",count)
      navigate('/')
    } catch (error) {
      const flag = false
      if (error.response && error.response.data) {
        const flag = false
        setError(error.response.data.error);
      } else {
        setError('An unexpected error occurred');
      }
      setSuccess('');
    }
  };
  return (
    <div >
      <Header details = {data}/>
          <h1 className='formhead'>Sign in to Poparide</h1>
      <form className='signup' style={{ height: '' }} onSubmit={handleSubmit}>
        <input type='email' className='setemail' placeholder='Email' name='exemail' onChange={handleChange} value={data.exemail}></input>
        <br></br>
        <br></br>
        <input type='password' className='setname' placeholder='Password' name='expassword' onChange={handleChange} value={data.expassword}></input>
        <br></br>
        <br></br>
        <input type='submit' className='setsubmit' placeholder='Submit'></input>
        {error && <p style={{ color: 'red' ,marginRight:'1rem',marginBottom:'1rem'}}>{error}</p>}
        {success && <p style={{ color: 'green',marginRight:'1rem',marginBottom:'1rem' }}>{success}</p> }

        <br></br>
        <br></br>
        <Link to="/" className='setlink'>Forgot your password?</Link><br /><br />
        <hr style={{ width: '20rem', marginLeft: '2rem' }} />
        <div className='newuser'>Not Feeling Social? <Link to='/newuser'>Sign up with your email</Link></div>
      </form>
      <Footer />
     
    </div>
    
  )
}
export default Signup