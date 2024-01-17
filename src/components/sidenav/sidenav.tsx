import React from 'react'
import { NavbarList } from '../navbar/navbarList'
import { ContextState } from '../../context/context'
import { Context } from 'vm'
import { SocialMedia } from '../socialMedia/socialMedia'

export const Sidenav = () => {
const {showItems} = ContextState() as Context

  return (
    <div className={`flex md:hidden lg:hidden fixed bg-black h-[90vh] w-full ${showItems} top-[80px] duration-500`}>
      <SocialMedia/>
      <NavbarList 
      ULClasses='flex justify-start items-start flex-col group relative font-bold text-[15px] w-full h-full' 
      LIClasses='py-5 ps-5 w-full border-b border-orange-600 cursor-pointer duration-500 relative overflow-hidden before:absolute before:content-"" before:bg-orange-600 before:w-full before:h-full before:left-0 before:duration-500 before:top-[100%] hover:before:top-[90%] '/>
    </div>
  )
}

