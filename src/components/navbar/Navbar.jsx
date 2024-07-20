/* eslint-disable no-unused-vars */
import React from 'react';
import Fire from '../../assets/images/fire.png'
import GlowingStar from '../../assets/images/glowing-star.png'
import PartyEmoji from '../../assets/images/partying-face.png';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie Club</h1>
      <div className="navbar_links">
        <a href="">Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' /></a>
        <a href="">Popular <img src={GlowingStar} alt="glowing emoji" className='navbar_emoji' /></a>
        <a href="">Popular <img src={PartyEmoji} alt="party emoji" className='navbar_emoji' /></a>
      </div>
    </nav>
  )
}

export default Navbar
