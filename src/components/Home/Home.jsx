import React, {useEffect} from 'react'
import './Home.scss'
import Video from '../../Assets/video.mp4'
import { AiOutlineSwapRight } from 'react-icons/ai'
import popularPlace1 from '../../Assets/popularPlace1.jpg'
import popularPlace2 from '../../Assets/popularPlace2.jpg'
import popularPlace3 from '../../Assets/popularPlace3.jpg'
import popularPlace4 from '../../Assets/popularPlace4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="Home">  
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos= 'fade-up'>Unlock Your Travel Dreams With Us!</h1>
        <p data-aos= 'fade-up'>Discover the world's most adventurous nature, Life is so short for a trip.</p>
      <button className='btn flex' data-aos= 'fade-up'>GET STARTED <AiOutlineSwapRight className="icon"/></button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos= 'fade-up'>Popular places</h3>
          <div className="images flex " data-aos= 'fade-up'>
            <img src={popularPlace2} alt="Destination Images" />
            <img src={popularPlace1}  alt="Destination Images" /> 
            <img src={popularPlace3}  alt="Destination Images" /> 
            <img src={popularPlace4}  alt="Destination Images" /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home