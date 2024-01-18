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
        <div className="w-[100%]  md:w-[50%] lg:w-[20%] flex justify-center items-center relative md:justify-start md:items-start lg:justify-start lg:items-start">
          {/* <div className='absolute bg-[#741102] w-full h-full z-[99]'></div> */}
            <img className="w-[70%] md:w-full lg:w-full h-[500px] relative z-[100]" src={artist2} alt='artist'/>
        </div>
        <div className='w-[100%] md:w-[80%] lg:w-[80%] flex flex-col gap-5 justify-center items-start p-5 md:p-3 lg:p-5 text-[1rem] md:text-[1rem] lg:text-[1rem]'>
            <em className='font-bold'>{Titles.artistName}</em>
            <p className=''>
               With a decade of experience in the industry, our passionate tattoo artist, deeply devoted to unleashing his imagination, takes pride in crafting tattoos that bring joy to customers. A recipient of multiple awards, he honed his craft at Aliens Tattoo Studio, one of India's premier tattoo studios. His commitment lies in transforming visions into inked masterpieces, ensuring every client leaves not just satisfied but elated.
            </p>
            <DiscussButton/>
            <div className=' hidden md:hidden lg:flex flex-nowrap md:flex-nowrap lg:flex-wrap justify-center md:justify-start lg:justify-start items-center gap-5 w-full h-full'>
            {
              artistVideos.map(({id, video}) => {
                return(
                    <video key={id} className='h-[25rem]' src={video} controls muted>
                    <source className='' src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              })
            }
        </div>
        </div>
        </div>
        <div className=' flex md:flex lg:hidden flex-wrap md:flex-wrap lg:flex-nowrap lg:justify-start lg:items-start gap-5 w-full h-full'>
            {
              artistVideos.map(({id, video}) => {
                return(
                    <video key={id} className='h-[25rem]' src={video} controls muted>
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
