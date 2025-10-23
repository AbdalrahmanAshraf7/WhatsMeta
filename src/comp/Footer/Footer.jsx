import React from 'react'

export default function Footer() {
  return <>

    <div className='flex flex-col md:flex-row bg-[#f2f2f2] p-7'>
        <div className=' p-5 text-center md:w-[50%] md:border-r-1 md:border-b-0 border-b-1 border-gray-300'>
            <span className='font-bold text-2xl'>Social Channels</span>
            <div className='flex flex-col items-center text-[15px]  '>
                <span className='flex items-center  gap-3 cursor-pointer hover:text-green-500'><i class="fa-brands fa-facebook font-bold"></i><a href="https://www.facebook.com/share/1AD8nusta8/"  target="_blank"   rel="noopener noreferrer"><span  className='font-semibold'>Facebook</span></a></span>
                <span className='flex items-center  gap-3 cursor-pointer hover:text-green-500'><i class="fa-brands fa-instagram font-bold"></i><a href="https://www.instagram.com/torvo_digital_marketing?igsh=MWR5dDMxczc2emFseQ=="  target="_blank"   rel="noopener noreferrer"><span  className='font-semibold'>Instagram</span></a></span>
                <span className='flex items-center  gap-3 cursor-pointer hover:text-green-500'><i class="fa-brands fa-tiktok font-bold"></i><a href="https://www.tiktok.com/@torvo.business.so?_t=ZS-90muQEhd57K&_r=1"  target="_blank"   rel="noopener noreferrer"><span  className='font-semibold'>TiktoK</span></a></span>
            </div>


        </div>
        <div className=' p-5  text-center  md:w-[50%]'>
            <span className='font-bold text-2xl'>Contant Support</span>
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
    <div className='text-center p-5 border-t-1 border-gray-200 bg-[#f2f2f2]'>
        <span className='font-semibold'>© 2025 | All rights reserved by Torvo</span>
    </div>
    

  
  </>
}
