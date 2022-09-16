import React from 'react'
import {RiMenu3Line, RiCloseLin, RiCheckboxBlankCircleFill} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/white-logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='simple_navbar'>
      <div className='simple_navbar-links'>
        <div className='simple_navbar-links_logo'>
          <img src={logo} alt='logo' width="70%"/>
        </div>
        <div className='simple_navbar-links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wsimple'>About</a></p>
          <p><a href='#possibility'>Shop</a></p>
          <p><a href='#features'>Features</a></p>
          <p><a href='#blog'>Blog</a></p>

        </div>
      </div>
    </div>
  )
}

export default Navbar