import React from 'react'

export default function Header() {
  return <>

  <div className='flex flex-col items-center gap-3 h-[60vh] md:h-[90vh] back-ground-header'>
    <span className='text-center text-[30px] px-3 md:text-[60px] font-bold font-sans mt-14 text-[#292d32]'>Grow Your Business With <br></br> <span className='text-[#46ba85]' >Torvo Services</span></span>
    <div>
    <button className='bg-[#46ba85] rounded-3xl px-8 py-3 font-semibold cursor-pointer hover:bg-white text-[17px] hover:text-black text-white  border-1 border-green-500  shadow-[0_0_10px_2px_rgba(70,186,133,0.6)] hover:shadow-[0_0_15px_3px_rgba(70,186,133,0.8)] transition-all duration-100 '>Get Started</button>
  </div>
  </div>
  

  
  </>
}
