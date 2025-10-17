import React from 'react'

export default function Services() {
  return <>
  
      <div className='my-7'><h2 className='text-center font-bold text-[30px]  md:text-[60px] text-[#292d32] '> Our Services & Features</h2></div>
      <div className='grid  grid-cols-1 place-items-center p-5 gap-3      md:grid-cols-2 md:px-14 lg:grid-cols-3 lg:px-32 my-32  '>

  <div className=" cursor-pointer hover:border-1 hover:shadow-2xl transition-all duration-100 hover:border-black max-w-sm p-9 bg-white border border-gray-200 rounded-lg shadow-sm ">
    <div className='flex flex-col items-center'>
        <span className='mb-4'><i class="fa-brands fa-wordpress text-4xl"></i></span>
        <span className='text-xl font-medium font-serif'>WordPress Development</span>

    </div>
   

    <p className="mb-3 font-medium text-gray-500  ">Custom, SEO-optimized WordPress

Websites built for performance and scalability, crafted to elevate your online presence.</p>
 
  </div>


  <div className=" cursor-pointer hover:border-1 hover:shadow-2xl transition-all duration-100 hover:border-black  max-w-sm  p-9 bg-white border border-gray-200 rounded-lg shadow-sm ">
    <div className='flex flex-col items-center'>
        <span className='mb-4'> <i class="fa-solid fa-code text-4xl"></i></span>
        <span className='text-xl font-medium font-serif'>Custom Coded WebSites</span>

    </div>
   

    <p className="mb-3 font-medium text-gray-500  ">Bespoke web solutions using HTML, CSS, JavaScript, Angular, and React, tailored to your unique business requirements for ultimate flexibility.</p>
 
  </div>
  <div className=" cursor-pointer hover:border-1 hover:shadow-2xl transition-all duration-100 hover:border-black   max-w-sm p-9 bg-white border border-gray-200 rounded-lg shadow-sm ">
    <div className='flex flex-col items-center'>
        <span className='mb-4'><i class="fa-brands fa-whatsapp text-4xl"></i></span>
        <span className='text-xl font-medium font-serif'>WhatsApp API Platform</span>

    </div>
   

    <p className="mb-3 font-medium text-gray-500  md:p-6 ">Send & receive messages via Official WhatsApp APIs and Web hooks.</p>
 
  </div>











        


      </div>
 
</>
}
