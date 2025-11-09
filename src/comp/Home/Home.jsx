import React, { useEffect, useState } from 'react'
import Header from "../Header/Header.jsx"
import Services from '../Services/Services.jsx'
import Comments from '../Comments/Comments.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";

import one from "../../assets/parteners/one.jpg"
import two from "../../assets/parteners/two.jpg"
import three from "../../assets/parteners/three.jpg"
import four from "../../assets/parteners/four.jpg"
import five from "../../assets/parteners/five.jpg"
import six from "../../assets/parteners/six.jpg"
import seven from "../../assets/parteners/seven.jpg"
import eight from "../../assets/parteners/eight.jpg"
import nine from "../../assets/parteners/nine.jpg"
import ten from "../../assets/parteners/ten.jpg"
import eleven from "../../assets/parteners/eleven.jpg"
import logo from "../../assets/logo.png"








export default function Home() {



   const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);







  return<>
  <Header></Header>
  <Services></Services>


          
     
<div className="my-40 md:p-0 px-9">
      <div className={`p-20 pt-5 relative container-3d ${flipped ? "flipped" : ""}`}>
        
        <div className="grid grid-cols-6 front-side">
          <img src={one} alt="1" />
          <img src={two} alt="2" />
          <img src={three} alt="3" />
          <img src={four} alt="4" />
          <img src={five} alt="5" />
          <img src={six} alt="6" />
          <img src={seven} alt="7" />
          <img src={eight} alt="8" />
          <img src={nine} alt="9" />
          <img src={ten} alt="10" />
          <img src={eleven} alt="11" />
        </div>

        
        <div className="p-5 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center back-side">
          <img src={logo} alt="logo" className="md:w-[400px] w-[200px]" />
        </div>
      </div>
    </div>




  <Comments></Comments>

  




    








  

 
  </>
}
