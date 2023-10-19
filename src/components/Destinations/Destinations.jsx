import React from 'react'
import './Destinations.scss'
import {MdLocationPin} from 'react-icons/md'
import {BsFillCreditCardFill} from 'react-icons/bs'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
// import image from '../../Assets/image1.jpg'
import {TiLocation} from 'react-icons/ti'
import image1 from '../../Assets/image_a.jpg'
import image2 from '../../Assets/image_b.jpg'
import image3 from '../../Assets/image_c.jpg'
import image4 from '../../Assets/image_d.webp'
import image5 from '../../Assets/image_e.webp'
import image6 from '../../Assets/image_f.jpg'
import image7 from '../../Assets/image_g.webp'
import image8 from '../../Assets/image_h.jpg'



const destinations = [
  {
    id:1,
    img: image1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id:2,
    img: image2,
    name: 'Baro Baro Island',
    location: 'Polynesia',
    rating: 4.3,
  },
  {
    id:3,
    img: image3,
    name: 'Maldives Island',
    location: 'Indian Ocean',
    rating: 4.9,
  },
  {
    id:4,
    img: image4,
    name: 'Santorini Island',
    location: 'Greece',
    rating: 4.5,
  },
  {
    id:5,
    img: image5,
    name: 'Bali Island',
    location: 'Indonesia',
    rating: 4.5,
  },
  {
    id:6,
    img: image6,
    name: 'Maui Island',
    location: 'Hawaii, USA',
    rating: 4.9,
  },
  {
    id:7,
    img: image7,
    name: 'Capri Island',
    location: 'Italy',
    rating: 4.7,
  },
  {
    id:8,
    img: image8,
    name: 'Fiji Island',
    location: 'South pacific',
    rating: 4.4,
  },
] 


const Destinations = () => {
  return (
    <div className="destination section container">
      <div className="secContainer">
        
        <div className="secTitle">
            <span className="redText">EXPLORE NOW</span>
            <h3>Find Your Dream Destination</h3>
            <p>Fill in the fields below to find the best spot for your next tour</p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon"/>
            <input type="text" placeholder="Location"/>
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon"/>
            <input type="text" placeholder="Budget"/>
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon"/>
            <input type="text" placeholder="Date"/>
          </div>

          <button className="btn flex"><BiSearchAlt
          className='icon'/>Search
          </button>
          </div>

          <div className="secMenu">
            <ul className="flex">
              <li className="active">All</li>
              <li>Recommended</li>
              <li>Beach</li>
              <li>Park</li>
              <li>Nature</li>
              <li>Mountain</li>
            </ul>
          </div>

          <div className="destinationContainer grid">
            {destinations.map((destination => {
              return(
                <div className="singleDestination" key={destination.id}>
              <div className="imgDiv">
                <img src={destination.img} alt="Destination Image" />
                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">{destination.name}</span>
                    <p className='flex'><TiLocation className="icon"/>
                      {destination.location}
                      </p>
                      </div>
                    <span className="rating">{destination.rating}</span>
                </div>
              </div>
            </div>
              );
            }))}
          </div>
        </div>

      </div>
      
    
  )
}

export default Destinations