import React from 'react'
import { navItems } from '../../data/data'
import { Contact, NavItems } from '../../constants/constants'
import { UseMoveEvents } from '../../customHooks/useMoveEvents'
import logo from "../../images/logo/ink.png"
import AppointmentButton from '../Buttons/appointmentButton'


type Events = {
  onMouseOver : () => void,
  onMouseLeave : () => void,
}

type Props = {
  ULClasses : string
  LIClasses : string
}

export const NavbarList = ({ULClasses,LIClasses} : Props) => {
const [move,events,width] = UseMoveEvents()
    
  return (  
  
    <ul className={`${ULClasses}`}>
        {
            navItems.map(({id} : {id : string}) => {
                return(
                    <li className={`${LIClasses}`} key={id} id={id} {...events as Events}>{id}</li>
                )
            })
        }
    <li className={`absolute h-[1%] ${width} bg-transparent  md:bg-orange-600 lg:bg-orange-600 top-[80%] left-0 ${move} duration-500`}></li>
    <li className='flex md:hidden lg:hidden py-2 mt-3 px-5  justify-center items-center flex-col w-full '>
      <span className='bg-[#741102] inline-block px-5 py-2 mb-3'>{Contact.number}</span>
      <div><AppointmentButton/></div>
      </li>
   </ul>
   
  )
}
