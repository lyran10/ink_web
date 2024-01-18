import React from 'react'
import { Header } from '../common/headers'
import { Titles } from '../../constants/constants'
import artist2 from "../../images/artist/artist2.png"
import DiscussButton from '../Buttons/discussButton'
import { artistVideos } from '../../data/data'

export const Artist = () => {
  return (
    <section className='w-full flex flex-col bg-[#040303]'>
        <Header header={Titles.artist}/>
        <div className='w-full flex flex-col md:flex-row lg:flex-row text-[#f5f5f5]'>
        <div className="w-[100%]  md:w-[50%] lg:w-[20%] flex justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start">
            <img className="w-[70%] md:w-full lg:w-full h-[500px]" src={artist2} alt='artist'/>
        </div>
        <div className='w-[100%] md:w-[80%] lg:w-[70%] flex flex-col gap-10 justify-center items-start p-5 md:p-3 lg:p-5 text-[1rem] md:text-[1rem] lg:text-[1rem]'>
            <em className='font-bold'>{Titles.artistName}</em>
            <p className=''>
               With a decade of experience in the industry, our passionate tattoo artist, deeply devoted to unleashing his imagination, takes pride in crafting tattoos that bring joy to customers. A recipient of multiple awards, he honed his craft at Aliens Tattoo Studio, one of India's premier tattoo studios. His commitment lies in transforming visions into inked masterpieces, ensuring every client leaves not just satisfied but elated.
            </p>
            <DiscussButton/>
        </div>
     </div>
     <div className='ms-0 md:ms-[30px] lg:ms-[30px] flex flex-wrap md:flex-wrap lg:flex-wrap justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start w-full h-full'>
            {
              artistVideos.map(({id, video}) => {
                return(
                    <video key={id} className='' src={video} controls muted>
                    <source className='' src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              })
            }
        </div>
    </section>
  )
}
