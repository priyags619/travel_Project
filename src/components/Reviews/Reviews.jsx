import React, {useEffect} from 'react'
import './Reviews.scss'
import {AiFillStar} from 'react-icons/ai'
import imagea from '../../Assets/image(1).jpg'
import imageb from '../../Assets/image(2).jpg'
import imagec from '../../Assets/image(5).jpg'
import imaged from '../../Assets/image(8).webp'
import imagee from '../../Assets/image(11).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Reviews = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv" data-aos= 'fade-up'>
          <span className="redText" data-aos= 'fade-up'>FROM OUR CLIENTS</span>
          <h3 data-aos= 'fade-up'>Real Travel History From Our Beloved Clients</h3>
          <p data-aos= 'fade-up'>
            By Choosing us as their tour agency, customers can expect an enriching and 
            enjoyable travel experience, filled with unforgettable memories that will last a lifetime. 
          </p>
          <span className="stars flex" data-aos= 'fade-up'>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          </span>
          <div className="clientsImages flex" >
            <img src={imagea} alt="Client Image" data-aos= 'fade-up' />
            <img src={imageb} alt="Client Image" data-aos= 'fade-up'/>
            <img src={imagec} alt="Client Image" data-aos= 'fade-up'/>
            <img src={imaged} alt="Client Image" data-aos= 'fade-up'/>
          </div>
        </div>
        <div className="imgDiv" >
          <img src={imagee} alt="Div image" data-aos= 'fade-down' />
        </div>
      </div>
    </div>
  )
}

export default Reviews