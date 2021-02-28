import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      <Link to={'/'}>
        <img src={require('../../assets/home.png')} alt="headerhome" />
      </Link>
    </nav>
  );
}

export default Header;
