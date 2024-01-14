import React,{useState} from 'react'
import logo from "../../images/ink.png"
import { UseMoveEvents } from '../../customHooks/useMoveEvents'
import { NavItems } from '../../constants/constants'
import { NavbarList } from './navbarList'

type Events = {
  onMouseOver : () => void,
  onMouseLeave : () => void,
}

export const Navbar = () => {
const [move,events] = UseMoveEvents()



  return (
    <nav className='h-[80px] w-full bg-[rgba(183,140,86,.18)] text-[#f5f5f5] fixed flex justify-around items-center z-[1000]'>
       <div className='h-[80px] w-[8rem]'>
          <img src={logo} alt="logo" className='h-full w-full'/>
        </div>
        <div className='flex gap-[5rem]'>
          <NavbarList/>
              <span className='py-2 px-5 bg-[#741102]'> +917387776775 </span>
        </div>
    </nav>
  )
}
