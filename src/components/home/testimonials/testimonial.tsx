import React from 'react'
import { RiDoubleQuotesR,RiDoubleQuotesL } from "react-icons/ri";
import { testimonials } from '../../../data/data';
import { Avatar } from '../../common/avatar';

type Props = {
    current : number
}

export const Testimonial = ({current} : Props) => {
  return (
    <>
    <div className='flex justify-center items-center flex-col gap-2 top-[100%]'>
    <Avatar/> 
    <em className=''>{testimonials[current as number] && testimonials[current as number].name}</em>
  </div>
    <div className='flex flex-col w-[70%]'>
    < RiDoubleQuotesL className='mb-5 text-[rgb(183,140,86)]'/>
    <em className='w-full text-[1.2rem] duration-300'>{testimonials[current as number] && testimonials[current as number].testimonial}</em>
    < RiDoubleQuotesR className='self-end mt-5 text-[rgb(183,140,86)]'/>
  </div>
  </>
  )
}
