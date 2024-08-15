import React from "react";
import Layout from "./../components/Layout/Layout";
import Carpool from "../extras/carpool.js";
import Background from '../extras/Background.js';
import Trustandsafety from "../extras/Trustandsafety.js";
import Hometree from '../extras/hometree.png';
import Homebus from '../extras/homebus.jpeg';
import Hometaxi from '../extras/hometaxi.jpg';
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Layout>
      <div className="container ">
        <Carpool />
        <Background />
        <Trustandsafety />
        <tr>
          <td><Link to='/readmore' ><img src={Homebus} style={{ height: '15rem', width: '22rem', borderRadius:'20px', marginRight: '2.5rem',objectFit:'contain',border:'0.5px solid gray' }}></img>
          </Link></td>
          <td><Link to='/readmore' ><img src={Hometree} style={{ height: '15rem', marginRight: '2.5rem',objectFit:'contain',borderRadius:'20px',border:'0.5px solid gray' }}></img>
          </Link></td>

          <td>
            <Link to='/readmore' ><img src={Hometaxi} style={{ height: '15rem',objectFit:'contain',borderRadius:'20px',border:'0.5px solid gray' }}></img>
            </Link>
          </td>
        </tr>
      </div>
    </Layout>
  );
};

export default HomePage;
