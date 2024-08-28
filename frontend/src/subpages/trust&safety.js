import React from 'react'
import Verify1 from './verify1.svg'
import Verify2 from './verify2.svg'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
const trustsafety = () => {
    const mystyle = {

    }
    return (
        <div>
            <Header />

            <div>
                <h1 className='mainhead'>Trust & Safety</h1>
                <div className='maindiv'>
                    <div style={mystyle} className='setquote'>
                        <h2>Since 2015, members have safely shared over 170 million km on Poparide.</h2>
                        <p>We’ve built trust and safety into our platform to help our members travel safely.</p>
                    </div>
                    <div>
                        <br></br><br></br><br></br><br></br><br></br>
                        <h1 style={{ fontFamily: 'Poppins, sans-serif' }}>A community you can depend on</h1>
                        <h4 style={{ color: 'gray', fontWeight: 'normal', fontFamily: 'Poppins, sans-serif' }}>We go the extra mile to ensure our members have a safe experience on Poparide</h4>
                        <table className='verifytable'>
                            <tr className='imageandhead' style={{ marginTop: '10rem' }}>
                                <td>
                                    <img src={Verify1}></img>
                                    <h1 >We verify all our drivers</h1>

                                </td>
                                <td >
                                    <img src={Verify2} ></img>
                                    <h1>You choose who you travel with.</h1>
                                </td>
                            </tr>
                            <tr className='des'>
                                <td> <p>All drivers go through a biometric verification of their driver's license, which ensures they have a valid, non-expired license and increases security by preventing fraud and scams.
                                </p></td>
                                <td><p>It’s always your choice who you travel with, and we never automatically match you with other members.
                                    Before you travel, you can review a member’s profile, including their name, photo, reviews from other members, number of Facebook friends and more.
                                </p></td>
                            </tr>
                            <tr className='link'>
                                <td>                                    <a href='#'>Find out more about verification</a>
                                </td>
                                <td><a href='#'>Find out more about booking process</a></td>
                            </tr>
                        </table>

                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default trustsafety
