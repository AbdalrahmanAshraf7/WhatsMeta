import React from 'react'
import contact from "../../assets/contact.png"

export default function ContactUs() {



  return <>

  <div className='text-center mt-10 back-ground-contact'>
    <div className=' text-4xl font-bold text-green-700'>
        Don't hesitate to contact us
    </div>

    <div className='md:flex flex-col w-full p-5 justify-center   '>
        <div className='  flex flex-col md:p-20 p-5 '>

            <div className='flex flex-col text-2xl'>
                <span className=' text-2xl font-semibold'>Talk with us.</span>
                <span className=' text-xl'>+201505257538</span>
            </div>
            <div className='flex flex-col my-6'>
                <span className='my-3 text-xl font-semibold'>Visit Us.</span>
                <span className='flex '>
                    <span><i class="fa-solid fa-location-dot text-3xl text-green-400  "></i></span>
                    <span class="max-w-sm break-words text-sm ">362, 6th Floor, QNB Bank Building 115  Salim El Awal Street, Helmeyat AZ Zaytoun</span>

                </span>
            </div>

            <div className='flex justify-center items-center gap-5 text-4xl'>
                <span className='flex items-center justify-center'>
                
                <a
                     href={`https://api.whatsapp.com/send?phone=201505753059&text=`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className=" fa-brands fa-whatsapp text-green-400"></a>
            </span>
            <span className='flex items-center justify-center'>
                <a class="fa-brands fa-instagram text-pink-600" href='https://www.instagram.com/torvo_digital_marketing/?igsh=MWR5dDMxczc2emFseQ%3D%3D' target='_blanck'></a>
            </span>
            <span className='flex items-center justify-center'>
                <a class="fa-brands fa-facebook text-blue-700" href='https://www.facebook.com/profile.php?id=61582206860769&rdid=iDtjQBPAkB5FB2Mh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AD8nusta8%2F' target='_blanck'></a>
            </span>
            <span className='flex items-center justify-center'>
                <a class="fa-solid fa-envelope text-red-600" href='mailto:torvo.whatsmeta@gmail.com' target='_blanck'></a>
                
            </span>
            </div>

            

        </div>
        <div className='h-screen justify-start  '>
            <img src={contact} className='w-[500px] ' alt="" />

        </div>
    </div>

  </div>

  
  </>
}
