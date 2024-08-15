import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul><li>  </li>
        <li><Link to="/driverpage">For Drivers</Link></li><hr/>
        <li><Link>For Passengers</Link></li><hr/>
        <li><Link>For Students</Link></li><hr/>
        <li><Link>Trust & Safety</Link></li><hr/>
        <li><Link>Sustainability</Link></li>


      </ul>
    </div>
  );
};

export default DropdownMenu;    