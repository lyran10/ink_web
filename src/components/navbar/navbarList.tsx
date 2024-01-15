import React from 'react'
import { navItems } from '../../data/navItemsData'
import { NavItems } from '../../constants/constants'
import { UseMoveEvents } from '../../customHooks/useMoveEvents'

type Events = {
  onMouseOver : () => void,
  onMouseLeave : () => void,
}

export const NavbarList = () => {
const [move,events,width] = UseMoveEvents()
    
  return (  
    <ul className='flex justify-center group items-center relative font-bold text-[12px]'>
        {
            navItems.map(({id}) => {
                return(
                    <li className='px-5' key={id} id={id} {...events as Events}>{id}</li>
                )
            })
        }
    <li className={`absolute h-[1%] ${width} bg-[#C5C5C5] top-[80%] left-0 ${move} duration-500`}></li>
   </ul>
  )
}
