import React from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Logo from '../Images/0024-removebg-preview.png';


function Header() {
    return (
      <div className="header"> 
          <img src={Logo} width={100} style={{marginLeft:30,marginBottom:20,marginTop:20}}/>
       <ul className="menu" >                 
       <li><Link to='/React-Website' className="link">Home</Link></li>
       <li><Link to='about' className="link">Games</Link></li>
       <li><Link to='services' className="link">Service</Link></li>
       <li><Link to='contact' className="link"> Contact</Link></li>
        </ul>
       
      </div>



    )
  }
  
  
  export default Header;