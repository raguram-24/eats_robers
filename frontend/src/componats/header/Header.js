import React, { useEffect } from "react";
import logo from "../../img/logo.png";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLoggedIn(false);
  }
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);
  return (
    <div className="header">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} />
          <p className="title">
            <a href="/">EatsRober</a>
          </p>
        </div>
        <div className="topbutton">
          <div className="nav">
            <a href="/">
              <h3>Home</h3>
            </a>
            <a href="/hotel">
              <h3>Restaurant</h3>
            </a>
          </div>
          {!loggedIn ? (
            <button className="sign_in">
              <a href="/login">Sign In</a>
            </button>
          ) : (
            <div style={{ color: "white" }}>
              Hi {JSON.parse(localStorage.getItem("user"))?.name}
            </div>
          )}
          {!loggedIn ? (
            <button className="sign_up">
              <a href="/signup">Sign up</a>
            </button>
          ) : (
            <button className="sign_up" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>

      <div className="contant">
        <input type="text" placeholder="Search for Restaurant" />
        <div className="search">Search </div>
        <h1>
          Orders on <span>Click</span>
        </h1>
        {/* <FontAwesomeIcon icon={faYoutube} className='sicon' />
                <FontAwesomeIcon icon={faTwitter} className='sicon'/>
                <FontAwesomeIcon icon={faFacebookF} className='sicon'/>
                <FontAwesomeIcon icon={faInstagram} className='sicon'/> */}
      </div>
    </div>
  );
}

export default Header;
