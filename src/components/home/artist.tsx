import React from 'react'
import { Header } from '../common/headers'
import { Titles } from '../../constants/constants'
import artist2 from "../../images/artist/artist2.png"

export const Artist = () => {
  return (
    <section className='w-full flex flex-col'>
        <Header header={Titles.artist}/>
        <div className='w-full flex flex-col md:flex-row lg:flex-row text-[#f5f5f5]'>
        <div className="w-[100%]  md:w-[50%] lg:w-[25%] flex justify-center items-center">
            <img className="w-[70%] md:w-full lg:w-full h-[500px]" src={artist2} alt='artist'/>
        </div>
        <div className='w-[100%] md:w-[80%] lg:w-[70%] flex flex-col gap-5 justify-center items-start p-0 md:p-3 lg:p-5 text-[1rem] md:text-[1rem] lg:text-[1rem]'>
            <em className='font-bold'>{Titles.artistName}</em>
            <p className=''>
               With a decade of experience in the industry, our passionate tattoo artist, deeply devoted to unleashing his imagination, takes pride in crafting tattoos that bring joy to customers. A recipient of multiple awards, he honed his craft at Aliens Tattoo Studio, one of India's premier tattoo studios. His commitment lies in transforming visions into inked masterpieces, ensuring every client leaves not just satisfied but elated.
            </p>
        </div>
        </div>
    </section>
  )
}
