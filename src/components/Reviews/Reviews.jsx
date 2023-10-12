import React from 'react'
import './Reviews.scss'
import {AiFillStar} from 'react-icons/ai'
import imagea from '../../Assets/image(1).jpg'
import imageb from '../../Assets/image(2).jpg'
import imagec from '../../Assets/image(5).jpg'
import imaged from '../../Assets/image(8).webp'


const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By Choosing us as their tour agency, customers can expect an enriching and 
            enjoyable travel experience, filled with unforgettable memories that will last a lifetime. 
          </p>
          <span className="stars flex">
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          </span>
          <div className="clientsImages flex">
            <img src={imagea} alt="" />
            <img src={imageb} alt="" />
            <img src={imagec} alt="" />
            <img src={imaged} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews