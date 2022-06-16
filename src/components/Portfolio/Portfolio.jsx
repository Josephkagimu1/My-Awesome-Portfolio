import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Simple from "../../img/simple.png";
import Start from "../../img/start2.jpg"
import Btn from "../../img/Btn.jpg";
import Github from "../../img/github.jpg";
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
        {/* heading */}
        <span style={{fontSize: '50px'}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={40}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href='https://www.youtube.com/watch?v=Ogg1dxLOAcI'> 
                <img src={Simple} alt='' /> </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href='https://www.youtube.com/watch?v=q9o2VSTmrzk&t=5s'>
                <img src={Github} alt='' /> </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href='https://www.youtube.com/watch?v=znvundghAmo'> 
                <img src={Btn} alt='' /> </a>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Start} alt='' />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio;