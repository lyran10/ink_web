import React from 'react'
import { NavbarList } from '../navbar/navbarList'
import { ContextState } from '../../context/context'
import { Context } from 'vm'

export const Sidenav = () => {
const {showItems} = ContextState() as Context

  return (
    <div className={`flex md:hidden lg:hidden fixed bg-[#f5f5f5] h-[90vh] w-full ${showItems} top-[80px] duration-500`}>
      <NavbarList 
      ULClasses='flex justify-start items-start flex-col group relative font-bold text-[20px] w-full h-full' 
      LIClasses='py-5 ps-5 w-full text-[#B78C56] cursor-pointer duration-500 hover:bg-[#741102] hover:text-[#f5f5f5]'/>
    </div>
  )
}

