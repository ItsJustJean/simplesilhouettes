import React from 'react'
import './header.css';
import people from '../../assets/Joop.png';
import kimono from '../../assets/kimono.png';

const Header = () => (
  <div className="simple__header section__padding" id="home">
    <div className="simple__header-content">
      <h1>Redifining affordable fashion.<br></br> Simple, Subtle, Stylish. </h1>
      <p>Welcome to a revolution in the fashion industry. Redefining the standard for Men and Women's fashion one piece at a time.</p>

      <div className="simple__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="simple__header-content__people">
        <img src={people} alt='me'/>
        <p>Enjoy this little picture of me.</p>
      </div>
    </div>

    <div className="simple__header-image">
      <img src={kimono} alt='kimono'/>
    </div>
  </div>
);

export default Header;