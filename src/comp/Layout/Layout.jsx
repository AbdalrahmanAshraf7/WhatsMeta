import React, { useEffect, useState } from 'react'
import {Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from "../Footer/Footer.jsx"
import WhatsBack from "../../assets/whatsBack.jpeg"
import whatsUser from "../../assets/logo2.png"

export default function Layout() {
  const [toggleWhats, setToggleWhats] = useState(false)
  const [toggleAnimation, setToggleAnimation] = useState(false)
  const [inputWhats, setInputWhats] = useState("")
   const [time, setTime] = useState("");
   

    useEffect(() => {

    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setTime(`${hours}:${minutes}`);
      
    
      return () => {
        
      }
    }, [])


    console.log(inputWhats)

    
    
    



    



  return <>
<div className='flex flex-col min-h-screen relative'>
  <Navbar></Navbar>

  
          <main className=' flex-grow-1 '>
            <Outlet></Outlet>
        
          </main>


          <Footer>

          </Footer>


          <div className={`p-5    fixed bottom-20 left-12 z-[9999999] ${toggleWhats === false ? "hidden" : ""}`}>
            <div className='bg-green-700 py-2 rounded-tl-lg rounded-tr-lg flex justify-between items-center px-2'>
              <div>
                <i className={`fa-solid fa-circle-xmark text-white cursor-pointer  `} onClick={()=>setToggleWhats(false)}></i>
              </div>
              <div className='flex items-center justify-center'>
                <span className='text-white font-medium'>Whatsapp</span>
                <i className="fa-brands fa-square-whatsapp text-white text-3xl"></i>
              </div>

            </div>
            <img className='w-[300px]  h-[310px] rounded-bl-lg rounded-br-lg border-1 border-green-300' src={WhatsBack} alt="" />
            <div className='flex absolute top-24 left-[40px] gap-0.5 '>
              <div className=' bg-[#4fbf73] border-1 border-green-400 h-[40px] w-[40px] rounded-full flex items-center justify-center overflow-hidden '>
                <img src={whatsUser} className='  ' alt="" />
              </div>
              
              <div className='bg-[#fff]  w-[200px] h-[60px] rounded-lg flex flex-col  '>
                <span className='text-[9px] mt-[7px] ms-2'>
                  Whats-Meta
                </span>
                <span className='text-[10px]  font-semibold ms-2'>
                  Hi, How can i help you ? 😊
                </span>
                <span className='text-[10px] text-slate-400 ms-2'>
                  {time}
                </span>
              </div>
              {/* <div className='bg-gray-50 w-[30px] h-[30px] absolute left-[-20px] rounded-tl-[50px] rounded-bl-[1000px] '>
              </div> */}
            </div>
            <div className='flex ms-3 absolute bottom-8 left-[20px] gap-1 items-center '>

              <input placeholder='What do u need ? 😉' onChange={(e)=>setInputWhats(e.target.value)} value={inputWhats} type="text" className='bg-white rounded-full focus:outline-0 py-2 px-3 text-[13px] w-[210px]' />
<button
  onClick={() => {
    const phone = "201505753059"; // رقمك بدون +
    const message = inputWhats.trim() || "Details, please";
    const encodedMessage = encodeURIComponent(message);
    const finalUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

    // ✅ الحل النهائي
    const a = document.createElement("a");
    a.href = finalUrl;
    a.target = "_blank"; // يفتح التطبيق أو الواتساب في تبويب جديد (يسمح به الموبايل)
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }}
  className="bg-gray-300 cursor-pointer w-[40px] h-[40px] rounded-full flex justify-center items-center"
>
  <i className="fa-solid fa-paper-plane text-gray-50"></i>
</button>



           
            </div>
          </div>
          <div className='p-4 rounded-full  fixed bottom-8 left-4 z-[9999999]'>
             <span className={`bg-green-500 border-2 border-green-300  p-5  justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer text-gray-200  ${toggleWhats ===false ? "flex" :"hidden"} ${toggleAnimation === true? "rotate-[360deg] transition-transform  duration-300 " :null} `} onClick={()=>setToggleAnimation(true)} onTransitionEnd={()=>{setToggleWhats(!toggleWhats) ; setToggleAnimation(false)}}>
              <i className="fa-brands fa-whatsapp text-3xl"></i>
             </span>
             <span className={`bg-gray-400   p-5  justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer text-gray-200  ${toggleWhats===false ? "hidden" : "flex"} ${toggleAnimation === true? "rotate-[-360deg] transition-transform  duration-300 " :null}`} onClick={()=>setToggleAnimation(true)} onTransitionEnd={()=>{setToggleWhats(!toggleWhats) ; setToggleAnimation(false)}}  >
              <i className="fa-solid fa-xmark text-3xl"></i>
             </span>
          </div>
      
</div>
      
    
  
  </>
}









 
