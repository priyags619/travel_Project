import './App.scss'
import Destinations from './components/Destinations/Destinations'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
// import 'bootstrap/dist/css/bootstrap.css'
import Portifolio from './components/Portifolio/Portifolio'
import Reviews from './components/Reviews/Reviews'
import Questions from './components/Questions/Questions'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'
import Middle from './components/Middle/Middle'



function App() {

  return (
    
      <div>
       <Navbar/>
       <Home/> 
       <Middle/>
       <Destinations/>
       <Portifolio/>
        <Reviews/>
       <Questions/>
       <Subscribe/>
       <Footer/>
    </div>
  )
}

export default App
