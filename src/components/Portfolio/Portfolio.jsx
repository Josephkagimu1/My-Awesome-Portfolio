import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/musicapp.png";
import Musicapp from "../../img/musicapp.png";
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
                <img src={Sidebar} alt='' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Ecommerce} alt='' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={HOC} alt='' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Musicapp} alt='' />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio;