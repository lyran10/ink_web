import React from 'react'
import { Header } from '../common/headers'
import { QuotesAndPara, Titles } from '../../constants/constants'
import studio from "../../images/studio/studio.jpg"
import studio2 from "../../images/studio/studio2.jpg"
import { Qoutes } from '../common/qoutes'

export const Studio = () => {
  return (
    <section className='text-[#f5f5f5]'>
      <Header header={Titles.studio}/>
      <div className='w-full flex flex-col gap-5 text-center font-bold'>
        <div className='w-[100%] md:w-[50%] lg:w-[100%]'>
            <span className='text-[1.2rem] md:text-[1.5rem] lg:text-[1.5rem]'>
              {QuotesAndPara.studioParagraph}
            </span>
        </div>
        <img className='w-full h-[80vh] md:h-[150vh] lg:h-[150vh] top-[50%] right-[50%]' src={studio} alt="" />
        {/* <div className='w-[100%] md:w-[50%] lg:w-[100%] flex justify-center items-start relative'>
           
            <img className='w-[300px] h-[300px] absolute z-[10]' src={studio2} alt="" />
        </div> */}
      </div>
      
    </section>
  )
}
