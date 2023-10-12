import React, { useState } from 'react'
import './Navbar.scss'
import {BiLogoMediumOld} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'


const Navbar = () => {
  //state to track and update navbar
  const [navBar, setNavBar] = useState('menu'); 
  // const [isVisible, setIsVisible] = useState(false);

  //Function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavBar");
    // setIsVisible(true);
  }
  //function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  }

  return( 
  <div className='navBar'>
    
    <div className="logoDiv">
      <BiLogoMediumOld className='icons'/>
      <span>OU-Trips</span>
    </div>

    <div className={navBar}>
      <ul>
        <li className="navList">Destination</li>
        <li className="navList">About Us</li>
        <li className="navList">Testimonial</li>
        <li className="navList">Gallery</li>
      </ul>
      {/* {
        isVisible ?
     
      : ''
      } */}
      <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar}/>
    </div>
    
    <button className="signUpBtn btn">Sign Up</button>
    <PiDotsNineBold className="icon menuIcon" onClick={showNavBar}/>
  </div>
  )
}

export default Navbar