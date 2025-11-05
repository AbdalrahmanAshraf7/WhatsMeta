import React from 'react'
import footerWhats from "../../assets/footerwhats.jpeg"

export default function Footer() {
  return <>

    <div className=' bg-[#f2f2f2] p-14 footer-whats relative'>
        <div className='flex flex-col md:flex-row z-0 '>
            <div className=' p-5 text-center md:w-[50%] md:border-r-1 md:border-b-0 border-b-1 border-gray-300 z-20 '>
            <span className='font-bold text-2xl nunito'>Social Channels</span>
            <div className='flex flex-col items-center text-[15px]  '>
                <span className='flex items-center  gap-3 cursor-pointer hover:text-green-500'><i class="fa-brands fa-facebook font-bold"></i><a href="https://www.facebook.com/share/1AD8nusta8/"  target="_blank"   rel="noopener noreferrer"><span  className='font-semibold'>Facebook</span></a></span>
                <span className='flex items-center  gap-3 cursor-pointer hover:text-green-500'><i class="fa-brands fa-instagram font-bold"></i><a href="https://www.instagram.com/torvo_digital_marketing?igsh=MWR5dDMxczc2emFseQ=="  target="_blank"   rel="noopener noreferrer"><span  className='font-semibold'>Instagram</span></a></span>
                <span className='flex items-center  gap-3 cursor-pointer hover:text-green-500'><i class="fa-brands fa-tiktok font-bold"></i><a href="https://www.tiktok.com/@torvo.business.so?_t=ZS-90muQEhd57K&_r=1"  target="_blank"   rel="noopener noreferrer"><span  className='font-semibold'>TiktoK</span></a></span>
            </div>


        </div>
        <div className=' p-5  text-center  md:w-[50%] z-20 '>
            <span className='font-bold text-2xl nunito'>Contant Support</span>
            <div className='flex flex-col items-center text-[15px] '>
              <span className='flex items-center gap-3 cursor-pointer hover:text-green-500'>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:torvo.whatsmeta@gmail.com">
             <span className='font-semibold ' >torvo.whatsmeta@gmail.com</span>
             </a>
            </span>


                <span className='flex items-center  gap-3 cursor-pointer'><i class="fa-solid fa-phone-volume"></i><span  className='font-semibold'>+201505257538</span></span>
            </div>
        </div>
        </div>

        <div className=' absolute top-0 bottom-0 right-0 left-0 bg-amber-600 opacity-35 z-10'>

        </div>
        <i class="fa-brands fa-whatsapp absolute text-green-600  whatsapp-icon z-[999999]"></i>
        <i class="fa-solid fa-heart absolute text-red-700 heart-icon z-[999999] "></i>
        <i class="fa-brands fa-whatsapp absolute text-green-600 z-[999999]  whatsapp-icon whatsapp-icon-shiking  "></i>
        <i class="fa-solid fa-thumbs-up finger-up text-blue-500 z-[999999]"></i>
    </div>
    <div className='text-center p-5 border-t-1 border-gray-200 bg-gray-300'>
        <span className='font-semibold nunito'>© 2025 | All rights reserved by Torvo</span>
    </div>
    

  
  </>
}
