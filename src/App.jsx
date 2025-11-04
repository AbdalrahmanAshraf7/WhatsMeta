import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider ,Navigate  } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'
import axios from 'axios'
import Layout from "./comp/Layout/Layout.jsx"
import Home from "./comp/Home/Home.jsx"
import Services from './comp/Services/Services.jsx'
import About from './comp/About/About.jsx'
import ContactUs from './comp/ContactUs/ContactUs.jsx'







function App() {

  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index : true , element: <Navigate to="home" replace />},
        { path : "home" , element: <Home/> },
        { path : "services" , element: <Services/> },
        { path : "about" , element: <About/> },
        { path : "contact" , element: <ContactUs/> },
        // { path : "docs" , element: <Docs/> },
      ],
      
    },
   
  ])

  const queryClient = new QueryClient()



  




  



  

  return <>
 



<QueryClientProvider client={queryClient}>

  <RouterProvider router={router} />

  </QueryClientProvider>
  
  
  </>
}

export default App
