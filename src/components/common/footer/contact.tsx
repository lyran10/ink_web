import React from 'react'
import { footerData } from '../../../data/data'

export const Contact = () => {
  return (
    <div className='h-[70%] w-[80%] m-auto flex justify-around items-start mt-10'>
        {
            footerData.map(({id,content,icon} : {id : string,content : string, icon : JSX.Element}) => {
                return(
                    <div key={id} className='flex flex-col justify-center items-center text-center gap-5 w-[30%] font-bold'>
                        <div className='p-5 rounded-full bg-red-300'>{icon}</div>
                        <span>{content}</span>
                    </div>
                )
            })
        }
    </div>
  )
}
