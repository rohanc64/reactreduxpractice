import React from "react";
import { Link } from 'react-router-dom';
import Googleauthentication from './Googleauthentication';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
          <Link to="/">
              <i className="teal ember big icon"></i>
          </Link>
        </div>
        <div className="right menu">
            <div className="item">
                <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i  className="search link icon"></i>
                 </div>    
            </div>
          <div className="item">
              {/* <button className="ui negative button">Logout</button> */}
            <Googleauthentication/>
          </div>
        </div>
      </div>
  );
};

export default Header;
