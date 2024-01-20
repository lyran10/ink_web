import React,{useEffect,useState} from 'react'
import {Qoutes } from "../common/qoutes"
import { MapComponent } from './map/map'
import { Communicate } from './communicate'
import { Footer } from '../common/footer/footer'
import { SocialMedia } from '../socialMedia/socialMedia'

export const Contact = () => {
const [show,setShow] = useState<boolean>(false)

useEffect(() => { setShow(true) },[])


  return (
    <main className={`w-full relative flex justify-center items-center duration-500 ${show ? "opacity-[1]" : "opacity-[0]"}`}>
            <SocialMedia/>
            <div className='w-full md:w-[97%] lg:w-[97%] bg-[#040303]'>
            <Qoutes qoute={""} lines={""} bg="before:bg-studio"/>
            <MapComponent/>
            <Communicate/>
            <Footer/>
            </div>
    </main>
  )
}


