import React from 'react'
import {Outlet, useLocation } from 'react-router-dom'
import SideDocBar from '../SideDocBar/SideDocBar'

export default function DocsLayout() {
  return <>
   <div className="flex flex-col md:flex-row  min-h-screen bg-gray-50">
     
      <aside className="">
        <SideDocBar />
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>

    </div>

  
  
  </>
}
