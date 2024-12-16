import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
import menu_icon from '../../assets/menu.png';
import search_icon from '../../assets/search.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import youtube_logo from '../../assets/youtube-red-icon.png';

function Navbar({setSidebar}) {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <img className="menu-icon" onClick={()=>setSidebar(prev =>prev===false?true:false)} src={menu_icon} alt="Menu" />
      <Link to='/'>  <img className="logo" src={youtube_logo} alt="Logo" /></Link>
      </div>

      {/* Middle Section */}
      <div className="nav-middle">
        <input type="text" className="search-input" placeholder="Search" />
        <img src={search_icon} alt="Search" className="search-icon" />
      </div>

      {/* Right Section */}
      <div className="nav-right">
        {/* <img src={upload_icon} alt="Upload" className="nav-icon" />
        <img src={more_icon} alt="More" className="nav-icon" /> */}
        <img src={notification_icon} alt="Notifications" className="nav-icon" />
        <img src={profile_icon} alt="Profile" className="profile-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
