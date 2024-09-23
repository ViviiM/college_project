import React, { createContext, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from './UserAuthContext';
import axios from 'axios';
import { Route } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Driver, setDriver] = useState(null)
  const saveDriver = async (formData) => {

      const response = await axios.post('http://127.0.0.1:8000/user_data/save-driver/', formData)
        .then(response => Swal.fire({
          title: response.data.message,
          icon: "success",
          toast: true,
          timer: 6000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false,
        })).catch(error => console.error('Error:', error)); 
      const { Driver } = response.data;
      console.log(Driver);
      setDriver(Driver)
  }

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const [AllDrivers,setAllDrivers] = useState(null) 
  const getdrivers = async () =>{
    try {
      const response = await axios.get("http://127.0.0.1:8000/user_data/all_drivers/")
      console.log(response.data);
      const x = {
        DriverName : response.data.DriverName,
        DriverEmail : response.data.DriverEmail,
        Price : response.data.Price,
        Origin : response.data.Origin,
        Destination : response.data.Destination,
        Time : response.data.Time,
        seats : response.data.seats
      }
      console.log(x);
      setAllDrivers(x)
      return x
    } catch (error) {
      console.log(error);
      return "Error"
    }
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout ,saveDriver,Driver ,AllDrivers,getdrivers}}>
      {children}
    </AuthContext.Provider>

  );
};

export const useAuth = () => useContext(AuthContext);
