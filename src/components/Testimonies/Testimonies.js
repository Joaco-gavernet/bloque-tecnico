import React from 'react';


// Styles
import './Testimonies.scss';


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';


// Swiper Styles
import 'swiper/swiper.scss';


const Testimonies = () => {


  return (
    <section className='home__testimonies'>
      <h3 className='testimonies__title'>Nuestros parceros confian en nuestro trabajo</h3>
      <p className='testimonies__text'>Vea lo que nuestros clientes hablan de nosotros</p>

      {/* <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={50}
        pagination={{ "clickable": true }}
        navigation={true}
        className='testimonies__boxes'
      >
        <SwiperSlide className='boxes'>
          <img src='' alt='Comillas' className='boxes__img' />
          <p className='boxes__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien eget ex pharetra, vitae iaculis elit scelerisque. Duis sit amet finibus nibh, at ornare tellus.</p>
          <h6 className='boxes__title'>Lorem ipsum |</h6>
          <img src='' alt='Logo' className='boxes__logo' />
        </SwiperSlide>
        <SwiperSlide className='boxes'>
          <img src='' alt='Comillas' className='boxes__img' />
          <p className='boxes__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien eget ex pharetra, vitae iaculis elit scelerisque. Duis sit amet finibus nibh, at ornare tellus.</p>
          <h6 className='boxes__title'>Lorem ipsum |</h6>
          <img src='' alt='Logo' className='boxes__logo' />
        </SwiperSlide>
        <SwiperSlide className='boxes'>
          <img src='' alt='Comillas' className='boxes__img' />
          <p className='boxes__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur sapien eget ex pharetra, vitae iaculis elit scelerisque. Duis sit amet finibus nibh, at ornare tellus.</p>
          <h6 className='boxes__title'>Lorem ipsum |</h6>
          <img src='' alt='Logo' className='boxes__logo' />
        </SwiperSlide>
      </Swiper> */}

      <Swiper
        // spaceBetween={50}
        // slidesPerView={auto}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}

        // loop={true}
        // pagination={{ "clickable": true }}
        // navigation={true}
        className='swiper'
      >
        <SwiperSlide className='swiper-slide'>
          <div className='slide-content'>
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='slide-content'>
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='slide-content'>
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='slide-content'>
            Slide 4
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className='slide-content'>
            Slide 5
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  );
}

export default Testimonies;