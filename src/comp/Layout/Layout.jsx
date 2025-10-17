import React from 'react'
import {Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from "../Footer/Footer.jsx"


export default function Layout() {


    



  return <>
<div className='flex flex-col min-h-screen'>
  <Navbar></Navbar>

  
          <main className=' flex-grow-1 '>
            <Outlet></Outlet>
        
          </main>


          <Footer>

          </Footer>
      

    

</div>
      
    
  
  </>
}
