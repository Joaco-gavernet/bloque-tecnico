import React, { useEffect } from 'react';


// Styles
import './NavBar.scss';


const NavBar = () => {

  useEffect(() => {

    const navbar = document.querySelector('.NavBar');
    const hero__logo = document.querySelector('.hero__logo')
    const services = document.querySelector('#services');
    const examples = document.querySelector('#examples');
    const join = document.querySelector('#join');


    window.addEventListener('scroll', () => {
      // console.log('position', window.scrollY);
      let position = window.scrollY;

      if (position >= 200) {
        navbar.classList.remove('NavBar-fixed');
      }

      if (position < 200) {
        navbar.classList.add('NavBar-fixed');
      }
    })


    hero__logo.addEventListener('click', () => {
      document.querySelector('.home__hero').scrollIntoView({
        behavior: 'smooth'
      });
    })

    services.addEventListener('click', () => {
      window.scroll({
        top: 689,
        left: 0,
        behavior: 'smooth'
      });
    })

    examples.addEventListener('click', () => {
      window.scroll({
        top: 1589,
        left: 0,
        behavior: 'smooth'
      });
    })

    join.addEventListener('click', () => {
      window.scroll({
        top: 2707,
        left: 0,
        behavior: 'smooth'
      });
    })


  }, [])




  return (
    <div className='NavBar'>
      <img src='assets/logo_bloque-white-header.png' alt='Logo' className='hero__logo' />
      <div className='hero__NavBar'>
        <p id='services'>Servicios</p>
        <p id='examples'>Proyectos</p>
        <p id='join'>Sumate</p>
        <p>Contacto</p>
      </div>
    </div>
  )

}



export default NavBar