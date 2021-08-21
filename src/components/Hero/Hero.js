import React from 'react';


const Hero = () => {

  return ( 
    <section className='home__hero'>
      <h2 className='hero__title'>Asesoramiento estratégico</h2>
      <p className='hero__text'>Brindamos asesoramiento estratégico a las instituciones en el sector eléctrico gestionando proyectos normalizados y diseños de iluminación comerciales e industriales</p>
      <div className='hero__sliders'>
        <button className='hero__slidersButtons'></button>
        <button className='hero__slidersButtons'></button>
        <button className='hero__slidersButtons'></button>
      </div>
    </section>
  );
}

export default Hero;