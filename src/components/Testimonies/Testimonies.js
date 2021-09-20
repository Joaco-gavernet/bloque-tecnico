import React from 'react';


// Styles
import './Testimonies.scss';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Swiper Styles
import "swiper/swiper.scss";


const Testimonies = () => {


  return (
    <section className='home__testimonies'>
      <h3 className='testimonies__title'>Nuestros parceros confian en nuestro trabajo</h3>
      <p className='testimonies__text'>Vea lo que nuestros clientes hablan de nosotros</p>


      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: '510px' }}>
          <div className='slide-content'>
            <img src='assets/comilla.png' alt='Comillas' className='boxes__img' />
            <p className='boxes__text'>El equipo de Bloque técnico realizo instalaciones completas para la Firma, cumpliendo
              pliegos en 5 conocidos Shoppings de IRSA, 6 locales en peatonales céntricas de la
              Ciudad y 5 locales para franquiciados. Su trabajo en proyectos normalizados y dirección
              de obra logro la aprobación de todos los requerimientos establecidos.</p>
            <div>
              <h6 className='boxes__title'>Christian Galdeano Alvarado | <br />
                CEO Mostaza y Pan S.A</h6>
              <img src='assets/mostaza-logo.png' alt='Logo' className='boxes__logo' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: '510px' }}>
          <div className='slide-content'>
            <img src='assets/comilla.png' alt='Comillas' className='boxes__img' />
            <p className='boxes__text'>Trabajamos en conjunto con el equipo de Bloque Técnico para desarrollar el Centro Cultural
              Coreano ubicado en Retiro, nos asesoraron muy bien con el proyecto, desarrollaron una muy
              buena dirección de obra, aunque se demoró un poco en Gral.
              Y entregaron documentación de
              proyecto reformada por modificaciones.
            </p>
            <div>
              <h6 className='boxes__title'>Arq. Antonio Chang | <br />
                Centro Cultural Coreano</h6>
              <img src='assets/ccc-logo.png' alt='Logo' className='boxes__logo' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: '510px' }}>
          <div className='slide-content'>
            <img src='assets/comilla.png' alt='Comillas' className='boxes__img' />
            <p className='boxes__text'>Llevamos a cabo con Bloque Técnico, varias instalaciones nuevas en oficinas con los
              mejores puntos de ventas y sus talleres en la zona de Devoto. Sus instalaciones dejaron
              complacidos a los dueños y satisfechos a los representantes de la firma Toyota.
              Recomendamos sus trabajos en ingeniería y costos.</p>
            <div>
              <h6 className='boxes__title'>Nicolas Arguelles  | <br />
                Jefe de Compras Auto Prana S.A.</h6>
              <img src='assets/toyota-logo.png' alt='Logo' className='boxes__logo' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: '510px' }}>
          <div className='slide-content'>
            <img src='assets/comilla.png' alt='Comillas' className='boxes__img' />
            <p className='boxes__text'>Bloque Técnico logro actualizar la instalación en nuestro punto de venta de Devoto,
              también realizaron la instalación eléctrica nueva de nuestro taller de mantenimiento
              general. Su trabajo industrial dejo muy conformes a los dueños.</p>
            <div>
              <h6 className='boxes__title'>Fabian Matich | <br />
                Gerente en Auto Lenken S.A.</h6>
              <img src='assets/audi-logo.png' alt='Logo' className='boxes__logo' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  );
}

export default Testimonies;