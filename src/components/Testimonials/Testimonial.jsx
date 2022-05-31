import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
//import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonial = () => {
   const clients = [
       {
           img: profilePic1,
           review:
                "Gloria a business lady who requested for website to show the business to her clients through her own website",
       },
       {
           img: profilePic2,
           review:
                "Potma, she wanted are chat app for there group for easy communication while they are not tracked by facebook or any organisation "
       },
       {
           img: profilePic3,
           review:
                "Scovia owns a certain boutique, she got an idea of getting a website "
       }
   ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span> Clients always get </span>
            <span> Exceptional Work </span>
            <span> from me... </span>
            <div className='blur t-blur1' style={{
                background: "var(--purple)"}}></div>

            <div className='blur t-blur2' style={{
                background: "skyblue"}}></div>
        </div>

        {/* slider */}
        <Swiper
        
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        grabCursor={true}
        >
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key={index} id='mm' >
                        <div className="testimonial">
                          <img src={client.img} alt="" />
                          <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    </div>
  )
}

export default Testimonial;