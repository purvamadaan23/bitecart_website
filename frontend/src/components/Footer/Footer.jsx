import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          
           <h1 class="logobitecart">BiteCart</h1>
           <p>BiteCart is a fast, reliable food delivery app that connects you to your favorite restaurants and cuisines with just a few taps. From local eateries to global chains, we deliver fresh meals right to your door, ensuring a seamless and delightful dining experience. Your cravings, delivered!</p>
           <div className='footer-social-icons'>
            <img src={assets.facebook_icon}></img>
            <img src={assets.twitter_icon}></img>
            <img src={assets.linkedin_icon}></img>
           </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
           <h2>Get In Touch</h2>
           <ul>
            <li>+91-99999-99999</li>
            <li>purvamadaan418@gmail.com</li>
           </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>
       Copyright 2024 © Purva Madaan- All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
