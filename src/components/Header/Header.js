import React, { useEffect, useState } from "react";
import logo from "../../images/SmartCivitas_Logo.png";
import { Link } from "react-router-dom";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  const [show, handleShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${show && "header__scroll"}`}>
      <div className="container">
        <nav className="nav flex space-bt align">
          <div className="nav__headerLeft flex">
            <div className="navbar__logo">
              <Link to="/">
                <img src={logo} alt="smartcivatas" />
              </Link>
            </div>
            <ul className="nav__headerLinks flex align">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Featured
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Gallery
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Contact
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Survey
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__headerRight flex align">
            <div className="nav__headerSearch flex align">
              <SearchIcon style={{ fontSize: "19px", margin: "0 3px 0 6px" }} />
              <input type="search" placeholder="Search" />
            </div>
            <ul className="nav__list flex align">
              <li className="nav__itemLink">
                <Link>Signup</Link>
              </li>
              <li className="nav__itemLink left">
                <Link>Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
