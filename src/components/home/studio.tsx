import React from 'react'
import { Header } from '../common/headers'
import { QuotesAndPara, Titles } from '../../constants/constants'
import studio from "../../images/studio/studio.jpg"
import studio2 from "../../images/studio/studio2.jpg"
import { Qoutes } from '../common/qoutes'
import { studioData } from '../../data/data'

export const Studio = () => {
  return (
    <section className='text-[#f5f5f5]'>
      <Header header={Titles.studio}/>
      <div className='w-full flex flex-col gap-5'>
        <div className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center items-start flex-wrap md:flex-nowrap lg:flex-nowrap'>
            {
              studioData.map(({id,header,para}) => {
                return(
                  <div key={id} className='w-full md:w-[80%] lg:w-[80%] flex flex-col justify-start items-start gap-2'>
                    <em className='font-bold px-5 py-2 bg-[#741102]'>{header}</em>
                    <p>{para}</p>
                  </div>
                )
              })
            }
        </div>
        <img className='w-full h-[80vh] md:h-[150vh] lg:h-[150vh] top-[50%] right-[50%]' src={studio} alt="" />
      </div>
    </section>
  )
}
