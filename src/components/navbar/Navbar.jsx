/* eslint-disable no-unused-vars */
import React from 'react';
import Fire from '../../assets/images/fire.png'
import GlowingStar from '../../assets/images/glowing-star.png'
import PartyEmoji from '../../assets/images/partying-face.png';
import './navbar.css'
import DarkMood from '../DarkMood/DarkMood';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie Club</h1>
      <div className="navbar_links">
        <DarkMood />
        <NavLink to="/">Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' /></NavLink>
        <NavLink to="/top_rated">Top Rated <img src={GlowingStar} alt="glowing emoji" className='navbar_emoji' /></NavLink>
        <NavLink to="/upcoming">Upcomming <img src={PartyEmoji} alt="party emoji" className='navbar_emoji' /></NavLink>
      </div>
    </nav>
  )
}

export default Navbar
