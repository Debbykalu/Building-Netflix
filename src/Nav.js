import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav_logo"
        src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
        alt="neflix_logo"
        height="60px"
      ></img>
      <img
        className="nav_avatar"
        src="https://pbs.twing.com/profile_images/124011999041155"
        alt="nav_avatar"
        height="60px"
      ></img>
    </div>
  );
}

export default Nav;
