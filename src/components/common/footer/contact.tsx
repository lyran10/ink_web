import React from 'react'
import { footerData } from '../../../data/data'

export const Contact = () => {
  return (
    <div className='h-[70%] w-full md:w-[80%] lg:w-[80%] m-auto flex justify-around flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start gap-5 mt-5 pb-5 border-b border-[rgba(225,225,225,.80)]'>
        {
            footerData.map(({id,content,icon} : {id : string,content : string, icon : JSX.Element}) => {
                return(
                    <div key={id} className='flex flex-col w-full md:w-[30%] lg:w-[30%] justify-center items-center text-center gap-1  font-bold'>
                        <div className='p-5 rounded-full bg-[rgba(225,225,225,.50)] text-[#741102]'>{icon}</div>
                        <span className='text-[0.8rem]'>{content}</span>
                    </div>
                )
            })
        }
    </div>
  )
}
