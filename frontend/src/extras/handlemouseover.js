import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul><li>  </li>
        <li><Link to="/driver">For Drivers</Link></li><hr/>
        <li><Link to ='/passenger'>For Passengers</Link></li><hr/>
        <li><Link to='/student'>For Students</Link></li><hr/>
        <li><Link to='/trustandsafety'>Trust & Safety</Link></li><hr/>
        <li><Link to='/sustain'>Sustainability</Link></li>


      </ul>
    </div>
  );
};

export default DropdownMenu;    