import React, { useEffect } from 'react';


// Components
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Examples from '../Examples/Examples';
import Testimonies from '../Testimonies/Testimonies';
import Join from '../Join/Join';


// Styles
import './Home.scss';


const Home = () => {


  useEffect(() => {

    if (window.scrollY > 2776) {
      document.querySelector('scrollUp').classList.add('show')
    }

  }, []);


  return (


    <div className='home'>
      <img src='assets/scroll.png' alt='' className='scrollUp' />

      <Hero />
      <Services />
      <Examples />
      <Testimonies />
      <Join />
    </div>
  )

}

export default Home