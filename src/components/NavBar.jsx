import React from "react";
import "../styles/NavBarStyle.css";
import searchIcon from "../assets/search.svg"
import bellIcon from "../assets/notif-bell.svg"
import kyle from "../assets/images/kyle.jpg"
import dropIcon from "../assets/dropdown.svg"
export default function NavBar() {
  return (
    <>
    <div className="navbar">
      <span className="navbar-greeting" style={{marginLeft: '20px'}}>Welcome Back, Kyle 🤟</span>
      <nav className="">
        <div className="nav-right">
          <div className="search-bar">
              <img src={searchIcon} alt="Search Icon" className="search-icon" />
              <input className="nav-search" type="text" placeholder="Search"/>
          </div>
          <img src={bellIcon} alt="Notifications" className="notif-icon" />
          <div className="nav-profile">
              <img className="profile-pic" src={kyle} alt="Profile" />
              <span className="profile-name">Kyle</span>
              <img src={dropIcon} alt="dropdown" className="dropdown-icon" />
          </div>
        </div>
      </nav>
      </div>

    </>
    
  );
}
