import React, { useEffect, useState } from 'react'
import {Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from "../Footer/Footer.jsx"
import WhatsIcon from "../WhatsIcon/WhatsIcon.jsx"
import { useLocalStorage } from 'react-use'


export default function Layout() {
    const location = useLocation();
     const hideFooterPaths = ["/docs",];
     const hideNavPaths = ["/docs",];

     const shouldHideFooter = hideFooterPaths.includes(location.pathname)
     const shouldNavFooter = hideNavPaths.includes(location.pathname)
    




    
    
    



    



  return <>
<div className='flex flex-col min-h-screen relative'>
  {!shouldNavFooter && <Navbar />}

  
          <main className=' flex-grow-1 '>
            <Outlet></Outlet>
        
          </main>


           {!shouldHideFooter && <Footer />}


          <WhatsIcon>

          </WhatsIcon>
      
</div>
      
    
  
  </>
}









 
