import React from 'react';


// Styles
import './Services.scss';



const Services = () => {
  return (
    <section className='home__services'>
      <h3 className='services__title'>Ofrecemos una gama amplia de servicios para atender </h3>
      <p className='services__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

      <div className='services__boxes'>
        <div className='boxes'>
          <img src='assets/residencial-img.png' alt='' className='boxes__img' />
          <h4 className='boxes__title' alt=''>Residencial</h4>
          <button className='boxes__button'></button>
        </div>

        <div className='boxes'>
          <img src='assets/comercial-img.png' alt='' className='boxes__img' />
          <h4 className='boxes__title' alt=''>Comercial</h4>
          <button className='boxes__button'></button>
        </div>

        <div className='boxes'>
          <img src='assets/industrial-img.png' alt='' className='boxes__img' />
          <h4 className='boxes__title' alt=''>Industrial</h4>
          <button className='boxes__button'></button>
        </div>
      </div>
    </section>
  );
}

export default Services;