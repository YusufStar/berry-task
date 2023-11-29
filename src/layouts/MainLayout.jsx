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
    <div className="flex h-screen overflow-hidden flex-col background">
      <div className="flex items-center h-fit p-4 text-black">
        <Navbar changeOpen={changeSideBar}/>
      </div>

      <div className="flex flex-1 h-full">
        <Sidebar setIsOpen={(value) => setSideOpen(value)} isOpen={sideOpen}/>

        <div className="flex flex-1 h-full bg-gray-200 p-2 bg-fuchsia-50 mr-5 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout