
import React from 'react'

import {Footer, Blog, Possibility, Features, Whatsimple, Header} from './containers';
import {CTA, Brand, Navbar} from './components';

import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>

        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatsimple />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>






    // <div>
    //    <h1>simplesilhouettes</h1>
    //    <h2>Just a barebones page at the moment, this is all placeholder for the larger website to come.</h2>
    //    <img src="weeknd.gif" alt ="The weeknd" width = "30%" ></img>

    //    <img src="IMG_7837.jpg" alt ="Jean Profile" width = "10%" ></img>
    //    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    //    <hr></hr>
    // </div>
  )
}

export default App