import React from 'react'
import { QuotesAndPara, Titles } from '../../constants/constants'
import  AppointmentButton  from '../Buttons/appointmentButton'

export const Banner = () => {
  return (
    <section className='h-[110vh] md:h-[120vh] lg:h-[130vh] w-full relative before:content-"" before:h-full before:w-full before:absolute before:bg-banner before:bg-cover before:bg-center before:brightness-50 before:bg-fixed'>
    <div className='absolute flex px-[50px] justify-start items-center h-full w-full overflow-hidden before:content before:absolute before:h-[30%] before:w-[100%] before:bg-[#040303] before:left-0 before:top-[95%] before:rotate-[10deg] before:-translate-x-[40px] after:content after:absolute after:h-[30%] after:w-[100%] after:bg-[#040303] after:right-0 after:top-[95%] after:rotate-[-10deg] after:translate-x-[40px]'>
      <div className='h-full w-full md:w-[80%] lg:w-[50%] flex flex-col justify-center items-center gap-5 mb-[180px] text-[#f5f5f5]'>
       <h1 className='font-extrabold text-[2rem] md:text-[3rem] lg:text-[3.5rem]'>{Titles.banner} <em className='text-[#B78C56]'>{Titles.highlightBannerHeader}</em></h1>
       <span className='text-start text-[1rem] md:text-[1.5rem] lg:text-[1.5rem] w-full text-[#B78C56]'>{QuotesAndPara.walkIn}</span>
      <AppointmentButton />
      </div>
    </div>
  </section>
  )
}
