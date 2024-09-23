import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
// Create context for authentication with new name 'UserContext'
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [init , setInit] = useState(null)
  const [message,setmessage] = useState("")
  const [ username , setusername] = useState(null)
  const [useremail , setuseremail] = useState(null)
  // Check localStorage for token on page load
  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    // const storedUser = localStorage.getItem('user');
    const storedinit = localStorage.getItem('init')
    const storedname = localStorage.getItem('name')
    const storedemail = localStorage.getItem('email')

    if (storedToken ) {
      setuseremail(storedemail);
      setusername(storedname);
      setToken(storedToken);
      setInit(storedinit);
      // setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function to set token and store in localStorage
  const JWTlogin = async (email, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/newtoken/login/', { email, password });
      const { access } = response.data.token; // Assuming the response contains 'access'  details
      const {msg , Initial ,username,user_email} = response.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('User' ,  Initial)
      localStorage.setItem('email' , user_email)
      localStorage.setItem('name' , username)
      // localStorage.setItem('user', JSON.stringify(user));
      setInit(Initial)
      setToken(access);
      setUser(user);
      setmessage(" " + msg)
      setusername(username)
      setuseremail(user_email)
      console.log(token , user , message);
      console.log("Success");
    } catch (err) {
      console.log('Login failed', err);
    }
  };

  // Signup function to create a new user
  const JWTsignup = async (name, email, password) => {
    try {
      const response = await axios.post('/newtoken/register/', { name, email, password });
      const {error} = response.data;
      if(error){
        // setError(error)
        console.log("Error",error)
        swal.fire({
          title: error,
          icon: "error",
          toast: true,
          timer: 6000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false,
      })
      }else{
        const { access } = response.data.token; 
        const {msg , user  , username , Initial,user_email} = response.data;
        console.log("Response",response.data)
        localStorage.setItem('accessToken', access);
        localStorage.setItem('User' ,Initial  )
        localStorage.setItem("Name" , username)
        localStorage.setItem('email' , user_email)

        // localStorage.setItem('user', JSON.stringify(user));
        setToken(access);
        setmessage(msg)
        setUser(user);
        console.log("Error",error)
      }
    } catch (err) {
      console.log('Signup failed', err);
    }
  };

  // Logout function to clear token
  const JWTlogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('init')
    localStorage.removeItem('User')
    localStorage.removeItem('email')
    localStorage.removeItem('name')

    // localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    setmessage(null)
    swal.fire({
      title: "Logout Succesfully",
      icon: "success",
      toast: true,
      timer: 6000,
      position: 'top-right',
      timerProgressBar: true,
      showConfirmButton: false,
  })
  };

  return (
    <UserContext.Provider value={{ token, user,init, error,username ,useremail,message,JWTlogin, JWTsignup, JWTlogout }}>
      {children}
    </UserContext.Provider>
  );
};
