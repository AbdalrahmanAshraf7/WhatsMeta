import React from 'react'

export default function Footer() {
  return <>

    <div className='flex flex-col md:flex-row bg-[#f2f2f2] p-7'>
        <div className=' p-5 text-center md:w-[50%] md:border-r-1 md:border-b-0 border-b-1 border-gray-300'>
            <span className='font-bold text-2xl'>Social Channels</span>
            <div className='flex flex-col items-center text-[15px] '>
                <span className='flex items-center  gap-3 cursor-pointer'><i class="fa-brands fa-whatsapp font-bold "></i><span className='font-semibold'>Whatsapp</span></span>
                <span className='flex items-center  gap-3 cursor-pointer'><i class="fa-brands fa-facebook font-bold"></i><span  className='font-semibold'>Facebook</span></span>
            </div>


        </div>
        <div className=' p-5  text-center  md:w-[50%]'>
            <span className='font-bold text-2xl'>Contant Support</span>
            <div className='flex flex-col items-center text-[15px] '>
                <span className='flex items-center  gap-3 cursor-pointer'><i class="fa-solid fa-envelope"></i><span className='font-semibold'>test@mail</span></span>
                <span className='flex items-center  gap-3 cursor-pointer'><i class="fa-solid fa-phone-volume"></i><span  className='font-semibold'>+12345678974</span></span>
            </div>
        </div>
    </div>
    <div className='text-center p-5 border-t-1 border-gray-200 bg-[#f2f2f2]'>
        © 2025 | All rights reserved by Torvo
    </div>
    

  
  </>
}
