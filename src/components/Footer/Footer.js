import React from 'react';


// Styles
import './Footer.scss';


const Footer = () => {

  return (
    <div className='footer'>
      <img src='assets/logo_bloque-white-header.png' alt='' className='footer__logo' />

      <div className='media'>
        <p className='media__text'>Seguinos en las redes:</p>
        <img src='assets/instagram-icon.png' alt='' className='media__img' />
        <img src='assets/instagram-icon.png' alt='' className='media__img' />
      </div>

      <div className='contact'>
        <span className='contact__item'>
          <img src='assets/mail-icon.png' alt='' className='item__img' />
          <p className='item__text'>ventas@bloquetecnico.com.ar</p>
        </span>
        <span className='contact__item'>
          <img src='assets/phone-icon.png' alt='' className='item__img' />
          <p className='item__text'>011-34237422</p>
        </span>
      </div>
    </div>
  );
}


export default Footer;