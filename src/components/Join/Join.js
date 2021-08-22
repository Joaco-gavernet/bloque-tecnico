import React from 'react';


// Styles
import './Join.scss';


const Join = () => {
  return (
    <section className='home__join'>
      <img src='assets/hace-parte-bkg.png' alt='' className='join__image' />
      <div className='join__box'>
        <h3 className='box__title'>Hacé parte de un proyecto con nosotros. <br />Crecé profisionalmente con nuestro equipo</h3>
        <p className='box__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien eget ex pharetra, vitae iaculis elit scelerisque. Duis sit amet finibus nibh, at ornare tellus. </p>
        <button className='box__button'>Sumate</button>
      </div>
    </section>
  );
}

export default Join;