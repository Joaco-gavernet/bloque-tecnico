import React from 'react';

const Testimonies = () => {
  return ( 
    <section className='home__testimonies'>
      <h3 className='testimonies__title'>Nuestros parceros confian en nuestro trabajo</h3>
      <p className='testimonies__text'>Vea lo que nuestros clientes hablan de nosotros</p>
      <div className='testimonies__boxes'>
        <div className='boxes'>
          <img src='' alt='' className='boxes__img' />
          <p className='boxes__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien eget ex pharetra, vitae iaculis elit scelerisque. Duis sit amet finibus nibh, at ornare tellus.</p>
          <h6 className='boxes__title'>Lorem ipsum |</h6>
          <img src='' alt='' className='boxes__logo' />
        </div>
      </div>
    </section>
   );
}
 
export default Testimonies;