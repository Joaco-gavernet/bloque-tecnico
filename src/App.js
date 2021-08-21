// Styles
import './App.scss';


// Components
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
// import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className='App'>

      {/* Componente NavBar */}
      {/* <div className='navBar'>
          <img src='assets/logo_bloque-white-header.png' alt='' className='hero__logo' />
          <div className='hero__NavBar'>
            <p>Servicios</p>
            <p>Proyectos</p>
            <p>Sumate</p>
            <p>Contacto</p>
          </div>
      </div> */}
      <NavBar />

      {/* Componente Home */}
      <Home />

      {/* <div className='home'> */}

        {/* Componente Hero */}
        {/* <section className='home__hero'>
          <h2 className='hero__title'>Asesoramiento estratégico</h2>
          <p className='hero__text'>Brindamos asesoramiento estratégico a las instituciones en el sector eléctrico gestionando proyectos normalizados y diseños de iluminación comerciales e industriales</p>
          <div className='hero__sliders'>
            <button className='hero__slidersButtons'></button>
            <button className='hero__slidersButtons'></button>
            <button className='hero__slidersButtons'></button>
          </div>
        </section> */}

        {/* Componente Services */}
        {/* <section className='home__services'>
          <h3 className='services__title'>Ofrecemos una gama amplia de servicios para atender </h3>
          <p className='services__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

          <div className='services__boxes'>
            <div className='boxes'>
              <img src='' alt='' className='boxes__img' />
              <h4 className='boxes__title' alt=''>Residencial</h4>
              <button className='boxes__text'></button>
            </div>

            <div className='boxes'>
              <img src='' alt='' className='boxes__img' />
              <h4 className='boxes__title' alt=''>Comercial</h4>
              <button className='boxes__text'></button>
            </div>

            <div className='boxes'>
              <img src='' alt='' className='boxes__img' />
              <h4 className='boxes__title' alt=''>Industrial</h4>
              <button className='boxes__text'></button>
            </div>
          </div>
        </section> */}

        {/* Componente Examples */}
        {/* <section className='home__examples'>
          <h5 className='examples__title'>Con vasta experiencia y conocimientos en el área eléctrica sumamos horas trabajos realizados a lo largo de nuestra trayectoria</h5>
          <div className='examples__details'>
            <div className='details'>
              <h6 className='details__numbers'>425</h6>
              <p className='details__text'>Clientes</p>
            </div>
            <div className='details'>
              <h6 className='details__numbers'>231</h6>
              <p className='details__text'>Proyectos Terminados</p>
            </div>
            <div className='details'>
              <h6 className='details__numbers'>2640</h6>
              <p className='details__text'>Horas de Trabajo</p>
            </div>
            <div className='details'>
              <h6 className='details__numbers'>1589</h6>
              <p className='details__text'>Promedio de KW Ahorrados</p>
            </div>
          </div>
        </section> */}

        {/* Componente Testimonies */}
        {/* <section className='home__testimonies'>
          <h3 className='testimonies__title'>Nuestros parceros confian en nuestro trabajo</h3>
          <p className='testimonies__text'>Vea lo que nuestros clientes hablan de nosotros</p>
          <div className='testimonies__boxes'>
            <div className='boxes'>
              <img src='' alt='' className='boxes__img' />
              <p className='boxes__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien eget ex pharetra, vitae iaculis elit scelerisque. Duis sit amet finibus nibh, at ornare tellus.</p>
              <h7 className='boxes__title'>Lorem ipsum |</h7>
              <img src='' alt='' className='boxes__logo' />
            </div>
          </div>
        </section> */}

        {/* Componente Join */}
        {/* <section className='home__join'>
          <h3 className='join__title'>Hacé parte de un proyecto con nosotros. Crecé profisionalmente con nuestro equipo</h3>
          <p className='join__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien eget ex pharetra, vitae iaculis elit scelerisque. Duis sit amet finibus nibh, at ornare tellus. </p>
          <button className='join__button'>Sumate</button>
        </section> */}
      {/* </div> */}

      {/* Componente Footer */}
      <div className='footer'>
        <img src='' alt='' className='footer__logo' />

        <div className='media'>
          <p className='media__text'>Seguinos en las redes:</p>
          <img src='' alt='' className='media__img' />
          <img src='' alt='' className='media__img' />
        </div>

        <div className='contact'>
          <span className='contact__item'>
            <img src='' alt='' className='item__img' />
            <p className='item__text'>ventas@bloquetecnico.com.ar</p>
          </span>
          <span className='contact__item'>
            <img src='' alt='' className='item__img' />
            <p className='item__text'>011-34237422</p>
          </span>
        </div>
      </div>

    </div>
  );
}

export default App;
