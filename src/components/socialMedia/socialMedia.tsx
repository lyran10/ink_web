import React from 'react'
import { socialMedia } from '../../data/data'

export const SocialMedia = () => {
  return (
    <div className='fixed z-[1000] bottom-0 left-0 flex justify-center items-center flex-col gap-3'>
        <div className='relative'>
        {
          socialMedia.map(({id, name, icon} : {id : string,name : string, icon : JSX.Element}) => {
            return(
                <button key={id} className='bg-[#741102] truncate cursor-pointer text-[#f5f5f5] relative w-9 p-2 group hover:w-[100px] duration-500 flex justify-between gap-3 items-center mb-3 before:absolute before:content-"" before:w-[2px] before:h-full before:bg-[#741102] before:right-0 hover:before:bg-white before:duration-500'>
                <div className=''>{icon}</div>
                 <span className='text-[0.7rem] pe-2 duration-500 font-bold'>{name}</span>
                </button>
            )
          })
        }
           </div>
    </div>
  )
}
