import React from 'react'
import { contactData } from '../../data/data'

export const Communicate = () => {
  return (
    <div className='bg-[#f5f5f5] flex flex-col gap-10 w-full p-0 md:p-5 lg:p-5 m-auto pb-5 border-b border-[rgba(225,225,225,.80)]'>
    <div className='w-full flex gap-10 flex-col md:flex-row lg:flex-row justify-center items-center md:justify-start md:item-start lg:justify-start lg:item-start'>
        <div className='w-[50%] flex flex-col gap-5'>
        <div className='w-full flex justify-center items-center md:items-start lg:items-start flex-col gap-2'>
                    <span className='font-bold'>Address</span>
                    <span className='text-center md:text-start lg:text-start'>Near Durga Temple Plot No 10, Opp Vailla Apartment, Vijay Nagar, Nagpur, Maharashtra 440013</span>
            </div>
            <div className='w-[100%] flex justify-center items-center md:items-start lg:items-start flex-col'>
                    <span className='font-bold'>Hours</span>
                    <span>Tuesday - Sunday</span>
                    <span>Monday closed</span>
                    <span>11 AM - 8 PM</span>
            </div>
        </div>
        <div className='w-[50%] flex justify-center flex-col md:flex-row lg:flex-row items-center md:items-center lg:items-center gap-5'>

            {
                contactData.map(({id,content,icon} : {id : string,content : string, icon : JSX.Element}) => {
                    return(
                        <div key={id} className='flex flex-col w-full md:w-[50%] lg:w-[50%] justify-center items-center text-center gap-1  font-bold'>
                            <div className='p-5 rounded-full bg-[rgba(225,225,225,.50)] text-[#741102]'>{icon}</div>
                            <span className='text-[0.8rem] text-black'>{content}</span>
                        </div>
                    )
                })
            } 
            </div>
         
        </div>
    </div>
  )
}