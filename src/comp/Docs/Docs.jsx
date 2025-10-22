import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import SideDocBar from '../SideDocBar/SideDocBar';
export default function Docs() {
    
  return<>


  
<div className='flex'>
     
     

  <SideDocBar></SideDocBar>


  <NavLink to={"/"} >Back Home</NavLink>
  
</div>


  
  </>
}
