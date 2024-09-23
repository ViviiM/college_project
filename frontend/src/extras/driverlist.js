import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const Driverlist = () => {
    const [AllDrivers, setdata] = useState({
        DriverName: [],
        DriverEmail: [],
        Price: [],
        Origin: [],
        Destination: [],
        stops: [],
        Time: [],
        seats:[],
      });
    useEffect(() => {
        const x = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/user_data/all_drivers/")
                console.log(response.data);
                setdata(response.data)
                console.log('data', response.data);
            } catch (error) {
                console.log(error);
            }
        }
        x()
    }, [])
    useEffect(() => {
        console.log('Current Data State:', AllDrivers);
    }, [AllDrivers]);

    return (
        <>
            <Header />
            <div className='container'>
                
                { AllDrivers.DriverName.map((val, index) => {
                            return <div className='box'>
                                <div>
                                    <div className='circle'>{AllDrivers.DriverName[index].charAt(0).toUpperCase()} </div>
                                    <div className='name' ><i class="fa fa-check" aria-hidden="true"></i> {val.length > 10 ? val.slice(0, 7).toUpperCase() : val.toUpperCase()}</div>
                                </div>
                                <div className='details'>

                                    {AllDrivers.Origin[index].charAt(0).toUpperCase() + AllDrivers.Origin[index].slice(1)}  to {AllDrivers.Destination[index].charAt(0).toUpperCase() + AllDrivers.Destination[index].slice(1)}
                                    <br /><span>Leaving : {AllDrivers.Time[index]} </span>
                                    <div>
                                        Pickup : {AllDrivers.Origin[index].charAt(0).toUpperCase() + AllDrivers.Origin[index].slice(1)}
                                    </div>
                                    <div className='flex'>
                                        Dropoff :  {AllDrivers.Destination[index].charAt(0).toUpperCase() + AllDrivers.Destination[index].slice(1)}
                                    </div>
                                </div>
                                <div className='details'>
                                    INR {AllDrivers.Price[index]}
                                </div>
                                <div>
                                    Seats left {AllDrivers.seats[index]}

                                </div>

                            </div>

                        })
                     }
            </div>
            <Footer />
        </>
    )

}

export default Driverlist