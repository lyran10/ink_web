import React from 'react'
import { Header } from '../../common/headers'
import { Titles } from '../../../constants/constants'
import { UseCarousel } from '../../../customHooks/useCarousel'
import { Testimonial } from './testimonial'


type Events = {
  onMouseUp : () => void,
  onMouseDown : () => void,
  onClick : () => void
}

export const Testimonials = () => {
const [trans, current, front, back, nextDisable, prevDisable, nextEvents, prevEvents] = UseCarousel()
// before:absolute before:content-"" before:w-full before:h-[20%] before:bg-orange-600 before:right-0 before:translate-y-5 before:bottom-[80%] before:rotate-[45deg]
  return ( 
    <section className='text-black bg-[#f5f5f5] relative before:absolute before:content-"" before:w-full before:h-[33.5%] before:bg-orange-600 before:z-[1] before:top-[85%]'>
      <Header header={Titles.testimonial} />
      <div className='flex justify-between items-center relative z-[100] mt-[100px] mb-[100px]'>
      <button disabled={prevDisable as boolean} {...prevEvents as Events} className={`w-5 h-5 absolute z-[1000] left-10 md:left-10 lg:left-20 rotate-45 duration-500 border-b border-l border-black cursor-pointer ${back ? "scale-75" : "scale-100"}`}></button> 
       <div className='flex flex-col justify-center items-center w-full'>
        <div className={`duration-300 p-5 relative w-full md:w-[70%] lg:w-[50%] h-[25rem] flex justify-center items-center gap-10 text-center flex-col`}>
         <div className={`flex gap-5 flex-col justify-center items-center relative bg-[#f5f5f5] ${trans} shadow-testimonials p-5 md:p-10 lg:p-10`}>
            <Testimonial current={current as number}/>
        </div>
       </div>
      </div>
      <button  disabled={nextDisable as boolean} {...nextEvents as Events} className={`w-5 h-5 absolute z-[1000] right-10 md:right-10 lg:right-20  rotate-45 duration-500 border-t border-r border-black cursor-pointer ${front ? "scale-75" : "scale-100"}`}></button>
    </div>
  </section>
  )
}
