import React from 'react'
import { SocialMediaIcons } from './socialMediaIcons'
import logo from "../../../images/logo/ink.png"

export const CopyRight = () => {
  return (
    <div className='flex justify-center md:justify-around lg:justify-around flex-col md:flex-row lg:flex-row gap-5 md:gap-0 lg:gap-0 items-center'>
      <div className='flex gap-3 justify-center items-center'>
        <span className='text-[0.8rem]'>© 2024 Ink-credible. All rights reserved.</span>
        <img className='w-16 h-12 md:w-20 md:h-14 lg:w-20 lg:h-14' src={logo} alt="" />
      </div>
    <SocialMediaIcons/>
    </div>
  )
}
