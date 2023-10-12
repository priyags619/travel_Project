import React from 'react'
import './Portifolio.scss'
import icon1 from '../../Assets/icon1.jpg'
import girl from '../../Assets/girl.jpg'
import family from '../../Assets/family.jpg'





const Portifolio = () => {
  return (
    <div className="portifolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
            <p>We Have extensive knowledge and experience
              in the travel industry.</p>
          </div>

          <div className="grid">
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon image" />
              </div>

              <div className="infor">
                <h4>Safety and support</h4>
                <p>Our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support available during the trip.</p>
              </div>
            </div>

            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon image" />
              </div>

              <div className="infor">
                <h4>Diverse Range Of Destinatons</h4>
                <p>Whether it's a domestic tour or an international adventure, 
                  we conver a wide range of destinations to cater to different interests and preferences.</p>
              </div>
            </div>

            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon image" />
              </div>

              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>Our dedicated customer support team is available round the clock to address any queries or concerns
                  before, during and after the trip.</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="rightContent">
          <img className="girl" src={girl} alt="Image Girl"/>
          <img  className="family" src={family} alt="Image Family"/>

        </div>
      </div>
    </div>
  )
}

export default Portifolio