
import React, { useState, createContext, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Footer from '../components/Layout/Footer';
import axios from 'axios'
import Header from '../components/Layout/Header';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { UserContext } from '../context/UserAuthContext';
import swal from 'sweetalert2'
const Signup = ({ setuser }) => {
  const { JWTlogin, message, user  } = useContext(UserContext)
  const { login } = useAuth()
  const navigate = useNavigate()
  const [data, setData] = useState({
    exemail: '',
    expassword: ''
  })
  const [token, settoken] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await JWTlogin(data.exemail, data.expassword);
      console.log(user);
      setSuccess(message)
      swal.fire({
        title: "Registered Successful",
        icon: "success",
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
    })

      login()
      navigate('/')
    } catch (error) {
      const flag = false

      setError("Error occured")
      setSuccess('');
    }
  };
  return (
    <div >
      <Header />
      <h1 className='formhead text-center'>Sign in to Poparide</h1>
      <form className='signup' style={{ height: '' }} onSubmit={handleSubmit}>
        <input type='email' className='setemail' placeholder='Email' name='exemail' onChange={handleChange} value={data.exemail}></input>
        <br></br>
        <br></br>
        <input type='password' className='setname' placeholder='Password' name='expassword' onChange={handleChange} value={data.expassword}></input>
        <br></br>
        <br></br>
        <input type='submit' className='setsubmit' placeholder='Submit'></input>
        {error && <p style={{ color: 'red', marginRight: '1rem', marginBottom: '1rem' }}>{error} Error</p>}
        {success && <p style={{ color: 'green', marginRight: '1rem', marginBottom: '1rem' }}>{success} success</p>}

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