// src/components/Header.js
import React from 'react';
import './Hooter.module.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>MENGOO</h2>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
