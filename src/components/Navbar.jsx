import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://1.bp.blogspot.com/-fDKPfnot9cI/XWYhh_-pS2I/AAAAAAAAPyk/LZAH7V8tkbIaKnWThvtgXfw0lrSEEvGRwCLcBGAs/s1600/Logo_NITMZ.png" alt="NIT Mizoram Logo" className="logo" />
        <span className="institute-name">National Institute of Technology Mizoram</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#news">News</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#announcements">Announcements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
