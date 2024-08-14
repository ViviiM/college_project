import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Profile from "../Profile";
import img from './icon.png'
import ico from './ind.ico'
import Handlemouseover from '../../extras/handlemouseover.js'
import Signup from "../../extras/Signup.js";
const Header = () => {
  const [isDropdownVisible,setDropdownVisible] = useState(false)
  const handlevisible = () => {
    setDropdownVisible(true);
  };
 
  const handlehide = () => {
    setDropdownVisible(false);
  };

  return (
    <>
    
      <nav className="container navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
             <img src={img}/><sup><img src={ico} height={'20px'} width={'20px'} style={{marginLeft:'-6px',marginBottom:'13px'}}/></sup>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/find" className="nav-link">
                <i class="fa fa-search" aria-hidden="true"></i> Find a ride
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/post" className="nav-link ">
                <i class="fa fa-plus" aria-hidden="true"></i> Post a trip
                </NavLink>
              </li>
             
            </ul>
           
          </div>
          <div className="iconbox">
          <button className="icons" onMouseEnter={handlevisible} onMouseLeave={handlehide}> <i class="fa fa-question-circle-o" aria-hidden="true"></i>  How it works 
          {isDropdownVisible && <Handlemouseover />}
          </button>
            <Link className="icons" to='/signup' > Sign-in <i class="fa fa-arrow-right" aria-hidden="true"></i> </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
