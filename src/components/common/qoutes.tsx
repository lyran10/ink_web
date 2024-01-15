import React from 'react'
import video from "../../images/VID-20240111-WA0052.mp4"
import image from "../../images/quotes.jpg"
import { Titles } from '../../constants/constants'

type Props = {
    qoute : string,
    bg : string,
    lines : string
}

export const Qoutes = ({lines,qoute,bg} :Props) => {
  return (
    <div className={`h-[25rem] w-full relative before:content-"" before:h-full before:w-full before:absolute ${bg} before:bg-cover before:bg-center before:brightness-[0.3] before:bg-fixed mb-20`}>
        {/* <video className='w-full h-[15rem] absolute' src={video} autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    <div className='absolute flex px-[50px] justify-center items-center h-full w-full overflow-hidden'>
      <div className='h-full w-full flex flex-col justify-center items-center gap-5 text-[rgb(183,140,86)]'>
     <span className='text-[1rem] md:text-[1.5rem] lg:text-[1.5rem]'>{lines}</span>
     <em className='font-bold'>{qoute}</em>
      </div>
    </div>
  </div>
  )
}
