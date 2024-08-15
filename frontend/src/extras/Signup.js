
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import axios from 'axios'
const Signup = () => {
  const [data, setData] = useState({
    exemail: '',
    expassword: ''
  })
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      const response = await axios.post('/user_data/login/', data);
      setSuccess(response.data.success);
      setError('');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError('An unexpected error occurred');
      }
      setSuccess('');
    }
  };
  return (
    <div >
      <Header />
      <h1 className='formhead'>Sign in to Poparide</h1>
      <form className='signup' style={{ height: '' }} onSubmit={handleSubmit}>
        <input type='email' className='setemail' placeholder='Email' name='exemail' onChange={handleChange}></input>
        <br></br>
        <br></br>
        <input type='password' className='setname' placeholder='Password' name='expassword' onChange={handleChange}></input>
        <br></br>
        <br></br>
        <input type='submit' className='setsubmit' placeholder='Submit'></input>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

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
