import React from 'react';


// Styles
import './NavBar.scss';


const NavBar = () => {



  return (
    <div className='NavBar'>
      <img src='assets/logo_bloque-white-header.png' alt='' className='hero__logo' />
      <div className='hero__NavBar'>
        <p>Servicios</p>
        <p>Proyectos</p>
        <p>Sumate</p>
        <p>Contacto</p>
      </div>
    </div>
  )

}



export default NavBar