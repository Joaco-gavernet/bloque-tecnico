import React from 'react';


// Components
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Examples from '../Examples/Examples';
import Testimonies from '../Testimonies/Testimonies';
import Join from '../Join/Join';


const Home = () => {


  return (

    <div className='home'>
      <Hero />
      <Services />
      <Examples />
      <Testimonies />
      <Join />
    </div>
  )

}

export default Home