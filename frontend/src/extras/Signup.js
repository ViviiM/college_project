
import React from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Signup = () => {
  return (
    <div >
      <Header/>
        <h1 className='formhead'>Sign in to Poparide</h1>
      <form className='signup' style={{height:''}}>
        <input type='email' className='setemail' placeholder='Email'></input>
        <br></br>
        <br></br>
        <input type='password' className='setname' placeholder='Password'></input>
        <br></br>
        <br></br>
        <input type='submit' className='setsubmit' placeholder='Submit'></input>
        <br></br>
        <br></br>
        <Link to="/" className='setlink'>Forgot your password?</Link><br/><br/>
        <hr style={{width:'20rem',marginLeft:'2rem'}}/>
        <div className='newuser'>Not Feeling Social? <Link to='/newuser'>Sign up with your email</Link></div>
      </form>
      <Footer/>
    </div>
  )
}

export default Signup
