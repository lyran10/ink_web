import React,{ useState} from 'react'
import { Timers } from '../constants/constants'
import { testimonials } from '../data/data'

export const UseCarousel = () => {
    const [current,setCurrent] = useState<number>(0)
    const [trans,setTrans] = useState<string>("translate-x-0 opacity-[1]")
    const [front,setFront] = useState<boolean>(false)
    const [back,setBack] = useState<boolean>(false)
    const [nextDisable,setNextDisable] = useState<boolean>(false)
    const [prevDisable,setPrevDisable] = useState<boolean>(false)
  
    const next = () => {
      if(current >= testimonials.length - 1) return
      
        setTimeout(() => {setNextDisable(false)},Timers.enable)
        setNextDisable(true)
        setTimeout(() => { setCurrent(curr => curr + 1) },Timers.currentTimer)
        setTrans("translate-x-[400px] opacity-[0] duration-300")
        setTimeout(() => { setTrans("-translate-x-[400px] opacity-[0]") },Timers.transOutTimer)
        setTimeout(() => { setTrans("translate-x-0 opacity-[1] duration-300") },Timers.transInTimer)
      
    }
  
    const prev = () => {
      if(current <= 0) return

        setTimeout(() => {setPrevDisable(false)},Timers.enable)
        setPrevDisable(true)
        setTimeout(() => { setCurrent(curr => curr - 1) },Timers.currentTimer)
        setTrans("-translate-x-[400px] opacity-[0] duration-300")
        setTimeout(() => { setTrans("translate-x-[400px] opacity-[0]") },Timers.transOutTimer)
        setTimeout(() => { setTrans("translate-x-0 opacity-[1] duration-300") },Timers.transInTimer)      
    }

    const nextEvents = {
        onMouseUp : () => setFront(false),
        onMouseDown : () => setFront(true),
        onClick : next
    }

    const prevEvents = {
        onMouseUp : () => setBack(false),
        onMouseDown : () => setBack(true),
        onClick : prev
    }

return [trans, current, front, back, nextDisable, prevDisable, nextEvents, prevEvents]

}
