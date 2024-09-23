
import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import img from './icon.png'
import ico from './ind.ico'
import Handlemouseover from '../../extras/handlemouseover.js'
import axios from "axios";
// import { Exportdata } from "../../extras/Signup.js";
import { useAuth } from "../../context/AuthContext.js";
import { useData } from "../../context/DataContext.js";
import { UserContext } from "../../context/UserAuthContext.js";
import SideBar from '../../extras/Sidebar.js'
const Header = ({ }) => {
  const { token, user ,  init } = useContext(UserContext)
  const { isLoggedIn } = useAuth();
  console.log("Token", token);
  console.log("status", isLoggedIn);
  console.log("User", user);
  console.log("Initial" , init);
  // if(user != null){
  //   user = JSON.parse(user)
  //   const mutableuser = {...user}
  //   console.log(mutableuser.name);
  // }
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const handlevisible = () => {
    setDropdownVisible(true);
  };
  const handlehide = () => {
    setDropdownVisible(false);
  };
  const [isDropdownVisibleSide, setDropdownVisibleside] = useState(false)
  const handlevisibleside = () => {
    setDropdownVisibleside(true);
  };

  const handlehideside = () => {
    setDropdownVisibleside(false);
  };

  const [getdata, setgetdata] = useState([])

  const [first_name, setfirst_name] = useState([])

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
              <img src={img} /><sup><img src={ico} height={'20px'} width={'20px'} style={{ marginLeft: '-6px', marginBottom: '13px' }} /></sup>
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
            {token ?
              <div className="nametag" onMouseEnter={handlevisibleside} onMouseLeave={handlehideside} > {init ? init : " "}
                {isDropdownVisibleSide && <SideBar />}</div>
              :
              <Link className="icons" to='/signup' > Sign-in <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
