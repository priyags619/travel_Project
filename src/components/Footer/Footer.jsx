import React, {useEffect} from 'react'
import './Footer.scss'

import {BiLogoMediumOld} from 'react-icons/bi';
import {ImFacebook} from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo" data-aos= 'fade-up'>
            <BiLogoMediumOld className="icon"/>
            <span>OU-Trips</span>
          </div>
          </div>

          <div className="socials flex" data-aos= 'fade-up'>
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>

          <div className="footerLinks" data-aos= 'fade-up'>
            <span className="linkTitle" data-aos= 'fade-up'>Information</span>
            <li>
              <a href="#" data-aos= 'fade-up'>Home</a>
            </li>
            <li>
              <a href="#" data-aos= 'fade-up'>Explore</a>
            </li>
            <li>
              <a href="#" data-aos= 'fade-up'>Travel</a>
            </li>
            <li>
              <a href="#" data-aos= 'fade-up'>Blog</a>
            </li>
          </div>

          <div className="footerLinks" data-aos= 'fade-up'>
            <span className="linkTitle" data-aos= 'fade-up'>Helpful Links </span>
            <li>
              <a href="#" data-aos= 'fade-up'>Destination</a>
            </li>
            <li>
              <a href="#" data-aos= 'fade-up'>Support</a>
            </li> 
            <li>
              <a href="#" data-aos= 'fade-up'>Travel & condition</a>
            </li> 
            <li>
              <a href="#" data-aos= 'fade-up'>Privacy</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle" data-aos= 'fade-up'>Contact Details </span>
            <span className="phone" data-aos= 'fade-up'>+651 125 658 </span>
            <span className="email" data-aos= 'fade-up'>isratech8@outlook.com</span>
          </div>
        </div>
      </div>
    
  )
}

export default Footer