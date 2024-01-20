import React,{useState,useEffect} from 'react'
import { Qoutes } from '../common/qoutes'
import { Header } from '../common/headers'
import { SocialMedia } from '../socialMedia/socialMedia'
import { ImageSlider } from './imageSlider'
import { Footer } from '../common/footer/footer'

export const Gallery = () => {
  const [show,setShow] = useState<boolean>(false)

   useEffect(() => { setShow(true) },[])
  return (
    <main className={`w-full bg-[#040303] flex justify-center items-center relative duration-500 ${show ? "opacity-[1]" : "opacity-[0]"}`}>
      <SocialMedia/>
      <div className='w-full md:w-[97%] lg:w-[97%] bg-[#f5f5f5] overflow-hidden'>
        <Qoutes qoute={""} lines={""} bg="before:bg-quote3"/>
        {/* <Header header="Gallery" /> */}
        <ImageSlider/>
        <Qoutes qoute={""} lines={""} bg="before:bg-quote3"/>
        <Footer/>
      </div>
    </main>
  )
}
