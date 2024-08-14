import React from "react";
import { Link } from "react-router-dom";
import img from './icon.png'
import ico from './ind.ico'
const Footer = () => {
  return (
    <div className="container footer">
      <hr />  <h1 className="text-center"><img src={img} /><sup><img src={ico} height={'20px'} width={'20px'} style={{ marginLeft: '-6px' }} /></sup></h1>

      <table className="tab mt-3">
        <tr>
          <td className="social">
            Poparide makes it fun and affordable to carpool in India with over 1 million members. <br />Save money, make new friends and reduce your carbon footprint.<br />
            <Link><i class="fa fa-instagram" aria-hidden="true" style={{ fontSize: '30px', marginTop: '2rem' }}></i></Link>
            <Link><i class="fa fa-linkedin" aria-hidden="true" style={{ fontSize: '30px' }}></i></Link>
            <Link><i class="fa fa-twitter" aria-hidden="true" style={{ fontSize: '30px' }}></i></Link>

          </td>


          <td>
            <ul >
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link>Sign up</Link>
              </li>
              <li>
                <Link>Download</Link>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <Link to="/about">How it works</Link>
              </li>
              <li>
                <Link to="/contact">Passengers</Link>
              </li>
              <li>
                <Link>Drivers</Link>
              </li>
              <li>
                <Link>Trust & Safety</Link>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <Link to="/about">News</Link>
              </li>
              <li>
                <Link to="/contact">Impact</Link>
              </li>
              <li>
                <Link>Locations</Link>
              </li>
              <li>
                <Link>Help</Link>
              </li>
            </ul>
          </td>
        </tr>
      </table>

      <div>© HitchPlanet Online Inc. 2024  |  <Link to="/policy">Privacy Policy</Link>  |  <Link to="/policy">Terms</Link></div>


    </div>
  );
};

export default Footer;
