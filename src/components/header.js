import React from 'react';
import './Header.css';
import './style.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Lexicon Logo" className="logo-image" />
        <span></span>
      </div>

      <div className="nav-links">
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
        <a href="/about">About</a>
      </div>
    </nav>
  </header>
);

export default Header;
