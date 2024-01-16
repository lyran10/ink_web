import React,{useState} from 'react'
import logo from "../../images/logo/ink.png"
import { UseMoveEvents } from '../../customHooks/useMoveEvents'
import { Contact, NavItems } from '../../constants/constants'
import { NavbarList } from './navbarList'
import { Sidenav } from '../sidenav/sidenav'
import { SidenavButton } from '../Buttons/sidenavButton'
import { ContextState } from '../../context/context'
import { Context } from 'vm'

type Events = {
  onMouseOver : () => void,
  onMouseLeave : () => void,
}

export const Navbar = () => {
const [move,events] = UseMoveEvents()
const {showItems} = ContextState() as Context
 


  return (
    <nav className={`h-[80px] w-full duration-500 ${showItems === "left-0 opacity-[1]" ? "bg-[rgb(183,140,86)]" : "bg-[rgba(183,140,86,.18)]"} text-[#f5f5f5] fixed flex justify-between md:justify-around lg:justify-around items-center z-[1000]`}>
       <div className='h-[80px] w-[8rem]'>
          <img src={logo} alt="logo" className='h-full w-full'/>
        </div>
        <div className='hidden md:flex lg:flex gap-[5rem]'>
          <NavbarList  ULClasses ='flex justify-center items-center flex-row group relative font-bold text-[12px]' LIClasses='px-5 cursor-pointer'/>
              <span className='py-2 px-5 bg-[#741102]'>{Contact.number}</span>
        </div>
        <div className='flex md:hidden lg:hidden'>
        <SidenavButton />
         <Sidenav />
        </div>
    </nav>
  )
}
