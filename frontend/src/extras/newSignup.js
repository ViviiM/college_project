import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { AuthContext } from '../connections/createauth';
import axios from 'axios'
const Signup = () => {
    const [post,setpost] = useState({username :'',password:''})
    // const [fname, setfname] = useState('')
    // const [pwd, setpwd] = useState('')
    // const { login } = useContext(AuthContext);
    const handleChange = (e) => {
        // setfname(e.target.value)
        setpost({...post,[e.target.name] : e.target.value})
    }
    const handleChange2 = (e) => {
        // setpwd(e.target.value)
    }
    // setpost({...post,[e.target.name]:e.target.value})
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(fname + " " + pwd);
        // await login(username, password);
        try {
            const response = await axios.post('http://localhost:8000/api/newuser', post);
            console.log(response.data);
          } catch (error) {
            console.error('Error posting data:', error);
          }
    };

    console.log(message);
    // useEffect(() => {

    // }, []);

    return (
        <div >
            <Header />
            <h1 className='formhead'>Sign up to Poparide</h1>
            <form className='signup' onSubmit={handleSubmit}>
                <input type='text' className='setemail' style={{ marginTop: '2.5rem' }} placeholder='First Name' 
                    onChange={handleChange} name='fname'></input>
                <br />
                <input type='text' className='setname' placeholder='Last Name' name='lname'></input>
                <br />
                <input type='email' className='setname' placeholder='Email' name='email'></input>
                <br />
                <input type='text' className='setname' placeholder='Password'
                    onChange={handleChange} name='pwd'></input>
                <br />
                <input type='text' className='setname' placeholder='Confirm Your Password' name='cnfpwd'></input>
                <br />
                <input type='submit' className='setsubmit' placeholder='Submit' value='Sign up'></input>
                <br />
                <p className='setterms'>By signing up, you agree to our <Link>Terms of service</Link></p>
                <hr style={{ width: '20rem', marginLeft: '2rem' }} />
            </form>
            <Footer />
        </div>
    )
}

export default Signup
