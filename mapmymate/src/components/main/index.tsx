import React from 'react'
import SideMenuItems from './SideMenuItems'
import MenuDetails from './MenuDetails'
import MateMap from '../map'
import Menu from './Menu'

export default function MainPage() {
  return (
    <div className='flex relative'>
        <div className='bg-gray-200 w-full h-screen'>
            <MateMap/>
        </div>
        <div className='absolute z-10 bg-[#0a3d62] px-4 py-2 rounded flex ml-auto right-2 top-2'>
        <Menu/>
        </div>
    </div>
  )
}
