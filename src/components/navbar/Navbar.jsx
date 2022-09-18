import React, {useState} from 'react';
import {RiMenu3Line, /*RiCloseLin, RiCheckboxBlankCircleFill,*/ RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/white-logo.svg';
import './navbar.css';

const Menu = () => (
  <> 
  <p><a href="#home">Home</a></p>
  <p><a href="#wsimple">About</a></p>
  <p><a href="#possibility">Shop</a></p>
  <p><a href="#features">Features</a></p>
  <p><a href="#blog">Blog</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className='simple_navbar'>
      <div className='simple_navbar-links'>
        <div className='simple_navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='simple_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='simple_navbar-sign'>
        <p>Sign in</p>
        <button type ='button'>Sign up</button>
      </div>
      <div className='simple_navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
}
        {toggleMenu && (
          <div className="simple_navbar-menu_container scale-up-center">
            <div className="simple_navbar-menu_container-links">
              <Menu />
            </div>
            <div className="simple_navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar