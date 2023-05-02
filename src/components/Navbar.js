import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { FaSearch, FaBell, FaUserCircle, FaAngleDown } from "react-icons/fa";
import Info from '../pages/info';
 

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handlesubmit = () => {
    window.location.replace('http://localhost:3000/info');
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#666666", size: "1.2rem" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div className="chitkara-logo">
            <img
              src="https://www.chitkara.edu.in/wp-content/uploads/2017/11/chitkara-university-logo.png"
              alt="logo"
              title="Chitkara University Logo"
              width="110"
              height="30"
              className="mlogo"
            ></img>
          </div>

          <div className="search-container">
            <img
              src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/CU_logo-5.svg"
              width="30"
              height="30"
            ></img>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <FaSearch />
            </button>
          </div>

          <div className="icons-container">
            <div className="notifications-icon">
              <FaBell />
            </div>
            <div className="profile-icon" onClick={toggleDropdown}>
              <FaUserCircle />
              <FaAngleDown className="dropdown-icon" />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li onClick={handlesubmit}>Profile</li>
                    <li>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose color="#ffffff" />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;