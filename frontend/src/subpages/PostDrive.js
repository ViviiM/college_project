import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Homebus from '../extras/homebus.jpeg'
import Bell from './bell.jpg'
import { Link, Route, Routes } from 'react-router-dom'
const PostDrive = () => {
    return (
        <div>
            <Header />
            <h2 className='mainhead posthead' >Hello! What do you need help with today?</h2>

            <div className='setquote driving'>
                <Link to='/instructions' style={{ textDecoration: 'none', color: 'black' }}><table>
                    <tr >
                        <td ><img src={Homebus} style={{ borderRadius: "10px", height: "10rem", width: "10rem", marginLeft: "1rem" }} /></td>
                        <td className='set'><h2>I am Driving</h2><span>I want to fill empty seats in my car</span></td>
                        <td><i class="fa fa-arrow-right" aria-hidden="true" ></i></td>
                    </tr>
                </table>
                </Link>
            </div>
            <div className='setquote driving '><Link to='/post' style={{ textDecoration: 'none', color: 'black' }}>
                <table>
                    <tr>
                        <td><img src={Bell} style={{ borderRadius: "10px", height: "10rem", width: "10rem", marginLeft: "1rem", padding: '1.2rem' }} /></td>
                        <td><h2>I need a Ride</h2><span>Notify me when a ride is available</span></td>
                        <td><i class="fa fa-arrow-right" aria-hidden="true" ></i></td>
                    </tr>
                </table></Link>

            </div>

            <Footer />
{/* 
            <Routes>
                <Route path="/instructions" element={<Instructions/>}></Route>

            </Routes> */}
        </div>

    )
}

export default PostDrive