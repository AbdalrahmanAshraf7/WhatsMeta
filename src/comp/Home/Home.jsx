import React from 'react'
import Header from "../Header/Header.jsx"
import Services from '../Services/Services.jsx'


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";

import feedBack1 from "../../assets/feedback/feedback1.jpg"
import feedBack2 from "../../assets/feedback/feedback2.jpg"
import feedBack3 from "../../assets/feedback/feedback3.jpg"
import feedBack4 from "../../assets/feedback/feedback4.jpg"
import feedBack5 from "../../assets/feedback/feedback5.jpg"
import phoneImage from "../../assets/feedback/phone.png"





export default function Home() {






  return<>
  <Header></Header>
  <Services></Services>

  


<div className='flex justify-center items-center mx-auto  back-ground-contact '>

  <div className='phone relative rotate-[90deg] md:me-32  '>

           <div className='flex justify-center items-center pt-0 p-24 z-3 absolute rotate-[270deg] md:top-[20%] md:left-[19%] top-[13%] left-[13%] comments'>
  <Swiper
    modules={[Navigation, Pagination]}
    navigation={true}
    pagination={{ clickable: true }}
    className='w-full md:max-w-[400px] max-w-[200px] w-photo  flex justify-center  items-center  mx-auto '
  >
    <SwiperSlide className='flex justify-center items-center '>
      <img className=' object-contain mt-[30%]' src={feedBack1} alt="feedback 1" />
    </SwiperSlide>

    <SwiperSlide className='flex justify-center items-center'>
      <img className=' object-contain' src={feedBack2} alt="feedback 2" />
    </SwiperSlide>

    <SwiperSlide className='flex justify-center items-center'>
      <img className=' object-contain' src={feedBack3} alt="feedback 3" />
    </SwiperSlide>

    <SwiperSlide className='flex justify-center items-center'>
      <img className=' object-contain' src={feedBack4} alt="feedback 4" />
    </SwiperSlide>

    <SwiperSlide className='flex justify-center items-center'>
      <img className=' object-contain  mt-[30%]' src={feedBack5} alt="feedback 5" />
    </SwiperSlide>
  </Swiper>
</div>

  </div>

 

</div>

    








  

 
  </>
}
