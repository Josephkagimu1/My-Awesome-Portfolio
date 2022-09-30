import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Simple from "../../img/simple.jpg";
import Counter from "../../img/counter.png";
import Speech from "../../img/text-to-speech.jpg";
import Login from "../../img/login-form.jpg";
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
        {/* heading */}
        <span className="heading" >Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={40}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href='https://www.youtube.com/watch?v=JO2lgsVaqzc&t=8s'> 
                <img src={Simple} alt='' /> </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href='https://www.youtube.com/watch?v=0aRX-akVJLQ&t=15s'>
                <img src={Login} alt='' /> </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href='https://www.youtube.com/watch?v=XalMUZh50vE&t=133s'>
                <img src={Counter} alt='' /> </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href='https://www.youtube.com/watch?v=1Y1pcFtKjeY&t=76s'> 
                <img src={Speech} alt='' /> </a>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio;