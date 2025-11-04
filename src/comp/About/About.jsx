import React from 'react'
import whatsMan from "../../assets/whatsMan.png"

export default function About() {
  return <>

  <div className='flex flex-col md:flex-row mt-14   '>
    <div className='flex flex-col gap-2 p-3  md:w-[80%]   '>
        <span className='flex flex-col gap-1 p-3 lg:px-52'>
         <p className='font-bold text-green-600 text-xl nunito'>
            Our message 
         </p>
         <p className='font-medium text-[19px] md:text-[15px] '>
           We believe in the importance of interactive communication with customers, from the simplest to the most in-depth. Creating your own chatbot will enable you to reach your customers, generate more revenue, save time and staff through our messaging platform, interact with them directly, and expand your business.
         </p>
        </span>
        <span className='flex flex-col gap-1 p-3  lg:px-52'>
         <p className='font-bold text-green-600 text-xl nunito '>
            Our goal
 
         </p>
         <p className='font-medium text-[19px] md:text-[15px]'>
             We always help you grow your business and succeed... by improving customer service and targeting more customers and sales.        
         </p>
        </span>
        <span className='flex flex-col gap-1 p-3  lg:px-52'>
         <p className='font-bold text-green-600 text-xl nunito'>
           Our mission

         </p>
         <p className='font-medium text-[19px] md:text-[15px]'>
            Supporting business owners by providing outstanding technological solutions from Murasalati to help them succeed, grow their brand, and reach their customers intelligently        
         </p>
        </span>
    </div>

    <div className='  md:w-[20%] flex relative justify-center'>
        <img src={whatsMan} alt="" className=' md:absolute w-[200px]  lg:left-[-210px] left-[130px]   md:left-[-10px] md:top-[50px]'/>

    </div>

    

  </div>

  <div className='md:p-16 p-5  flex lg:flex-col md:flex-col  mb-14 mt-20 md:mt-10   '>

     <div className='flex flex-col md:flex-row w-full'>
    <div className=' w-full p-5 flex justify-end lg:justify-center md:order-2 '>

<div className="flex  md:w-[400px] w-[250px] h-[400px] nunito  bg-green-700  justify-center items-center rounded-tl-[200px] rounded-bl-[250px] rounded-tr-[50px] rounded-br-[50px] mb-5">
    <span className="text-2xl font-bold text-white">
        Our Priority
    </span>
</div>

    </div>

    <div className=' w-full  grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 md:order-1'>
        <div>
            <div className='flex flex-col gap-1'>
                <span className='flex items-center gap-5'>
                 <i class="fa-solid fa-shield-halved text-2xl text-green-600"></i> <span className='font-bold'>Privacy First</span> 
            </span>
            <span className='ms-13 text-gray-600'>
                The confidentiality of your data and the privacy of your clients are paramount to us at Mesalati, and that's why we work diligently to protect your data at all times.
            </span>
            </div>

        </div>
        <div>
            <div className='flex flex-col gap-1'>
                <span className='flex items-center gap-5'>
                <i class="fa-solid fa-tower-broadcast text-2xl text-green-600"></i> <span className='font-bold'>Ease of communication</span> 
            </span>
            <span className='ms-13 text-gray-600'>
                Our vision is to make the world a better place and make life easier for others through our messaging platform by providing smart business solutions.
            </span>
            </div>

        </div>
        <div>
            <div className='flex flex-col gap-1'>
                <span className='flex items-center gap-5'>
                 <i class="fa-solid fa-user-group text-2xl text-green-600"></i> <span className='font-bold'>One team </span>
            </span>
            <span className='ms-13 text-gray-600'>
                Our mission is to gather all your customers from social media platforms into one messaging platform and serve them in the best and easiest way.
            </span>
            </div>

        </div>
        <div>
            <div className='flex flex-col gap-1'>
                <span className='flex items-center gap-5'>
                <i class="fa-solid fa-circle-check text-2xl text-green-600"></i> <span className='font-bold'> More success </span>
            </span>
              <span className='ms-13 text-gray-600'>
              We use information and technology to achieve continued success and generate a lot of money and wealth.
                 </span>
            </div>

        </div>
        <div>
            <div className='flex flex-col gap-1'>
                <span className='flex items-center gap-5'>
                 <i class="fa-solid fa-thumbs-up text-2xl text-green-600"></i> <span className='font-bold'>Always with you </span>
            </span>
              <span className='ms-13 text-gray-600'>
              My entire team is in contact with you to help and support your business to thrive, grow, and stay on top.
                 </span>
            </div>

        </div>
        <div>
            <div className='flex flex-col gap-1'>
                <span className='flex items-center gap-5'>
                <i class="fa-solid fa-hand-holding-heart text-2xl text-green-600"></i> <span className='font-bold'>Your opinion matters to us </span>
            </span>
              <span className='ms-13 text-gray-600'>
              Your opinion always matters to us and helps us provide the best experience; it is the true driving force behind everything we do in my correspondence.
                 </span>
            </div>

        </div>

    </div>

  </div>

  </div>

 


  
  </>
}
