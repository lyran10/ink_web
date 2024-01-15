import React from 'react'
import video from "../../images/VID-20240111-WA0052.mp4"

type Props = {
    qoute : string
}

export const Qoutes = ({qoute} :Props) => {
  return (
    <div className='h-[20rem] w-full relative before:content-"" before:h-full before:w-full before:absolute before:bg-banner before:bg-cover before:bg-center before:brightness-50 before:bg-fixed'>
        <video className='w-full h-[15rem]' src={video} autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className='absolute flex px-[50px] justify-start items-center h-full w-full overflow-hidden'>
      <div className='h-full w-full flex flex-col justify-center items-start gap-5'>
     <em className='text-[2rem] text-[rgb(183,140,86)]'>{qoute}</em>
      </div>
    </div>
  </div>
  )
}
