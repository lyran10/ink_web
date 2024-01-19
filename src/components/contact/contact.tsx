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
    <main className={`w-full bg-[#f5f5f5] relative duration-500 ${show ? "opacity-[1]" : "opacity-[0]"}`}>
            <SocialMedia/>
            <Qoutes qoute={""} lines={""} bg="before:bg-studio"/>
            <MapComponent/>
            <Communicate/>
            <Footer/>
    </main>
  )
}


