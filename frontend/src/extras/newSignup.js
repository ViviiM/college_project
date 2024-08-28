import React, { useContext, useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
// import { AuthContext } from '../connections/createauth';
import axios from 'axios'
const Signup = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await axios.post('http://127.0.0.1:8000/user_data/register/', {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                password: formData.password,
            })
            setSuccess('User registered successfully!');
            setError("")
            navigate('/signup')

        } catch (err) {
            setError('Failed to register user');
            setSuccess('');
        }
    };


    return (
        <div >
            <Header />
            <h1 className='formhead'>Sign up to Poparide</h1>
            <form className='signup' onSubmit={handleSubmit} >
                <input type='text' className='setemail' style={{ marginTop: '2.5rem' }} placeholder='First Name'
                    name='firstName' onChange={handleChange} value={formData.firstName} required></input>
                <br />
                <input type='text' className='setname' placeholder='Last Name' name='lastName'  value={formData.lastName} onChange={handleChange} required></input>
                <br />
                <input type='email' className='setname' placeholder='Email' name='email' value={formData.email} onChange={handleChange} required></input>
                <br />
                <input type='password' className='setname' placeholder='Password'   value={formData.password}
                    name='password' onChange={handleChange} required></input>
                <br />
                <input type='password' className='setname' placeholder='Confirm Your Password' value={formData.confirmPassword} name='confirmPassword' onChange={handleChange} required></input>
                <br />
                {success && <p style={{ color: 'green' }}>{success}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}


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
