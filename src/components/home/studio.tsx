import React from 'react'
import { Header } from '../common/headers'
import { StudioPara, Titles } from '../../constants/constants'
import studio from "../../images/studio/studio.jpg"
import { studioData } from '../../data/data'

export const Studio = () => {
  return (
    <section className='text-black bg-[#f5f5f5]'>
      <Header header={Titles.studio}/>
      <div className='w-full flex flex-col gap-5'>
        <div className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center items-start flex-wrap md:flex-nowrap lg:flex-nowrap'>
            {
              studioData.map(({id,header,para} : {id :string,header: string,para : StudioPara}) => {
                return(
                  <div key={id} className='w-full md:w-[80%] lg:w-[80%] flex flex-col justify-start relative items-start gap-2 shadow-testimonials p-5'>
                    <em className='font-bold px-5 py-2 bg-[#741102] text-[#f5f5f5]'>{header}</em>
                    <p>{para}</p>
                  </div>
                )
              })
            }
        </div>
        <img className='w-full h-[80vh] md:h-[150vh] lg:h-[200vh] top-[50%] right-[50%]' src={studio} alt="" />
      </div>
    </section>
  )
}
