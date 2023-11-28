'use client'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'

const MainLayout = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false)

  const changeSideBar = () => {
    setSideOpen(prev => !prev)
  }

  return (
    <div class="flex min-h-screen overflow-y-auto flex-col background">
      <div class="flex items-center h-fit p-4 text-black">
        <Navbar changeOpen={changeSideBar}/>
      </div>

      <div class="flex flex-1 h-full">
        <Sidebar isOpen={sideOpen}/>

        <div class="flex-1 h-full bg-gray-200 p-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout