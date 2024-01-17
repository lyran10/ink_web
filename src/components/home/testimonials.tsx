import React ,{useState,useEffect} from 'react'
import { Header } from '../common/headers'
import { Titles } from '../../constants/constants'
import { testimonials } from '../../data/data'
import { Avatar } from '../common/avatar'
import quotes from "../../images/testimonials/quotes.png"

export const Testimonials = () => {
  const [current,setCurrent] = useState<number>(0)
  const [Trans,setTrans] = useState<string>("translate-x-0 opacity-[1]")
  const [front,setFront] = useState<boolean>(false)
  const [back,setBack] = useState<boolean>(false)

  const next = () => {
    if(current === testimonials.length - 1) return
    setTimeout(() => { setCurrent(curr => curr + 1) },300)
    setTrans("translate-x-[400px] opacity-[0] duration-500")
    setTimeout(() => { setTrans("-translate-x-[400px] opacity-[0]") },400)
    setTimeout(() => { setTrans("translate-x-0 opacity-[1] duration-500") },800)
  
  }

  const prev = () => {
    if(current === 0) return
    setTimeout(() => { setCurrent(curr => curr - 1) },300)
    setTrans("-translate-x-[400px] opacity-[0] duration-500")
    setTimeout(() => { setTrans("translate-x-[400px] opacity-[0]") },400)
    setTimeout(() => { setTrans("translate-x-0 opacity-[1] duration-500") },800)
  }

  return (
    <section className=''>
      <Header header={Titles.testimonial} />
      <div className='flex justify-between items-center relative'>
       <div onMouseDown={() => setBack(true)} onMouseUp={() => setBack(false)} onClick={prev} className={`w-5 h-5 absolute left-0 md:left-10 lg:left-20 rotate-45 duration-500 border-b border-l border-b-[#f5f5f5] border-l-[#f5f5f5] cursor-pointer ${back ? "scale-75" : "scale-100"}`}></div>
       <div className='flex flex-col justify-center items-center w-full'>
        <img src={quotes} className='w-16 h-16'/>
        <div className={`text-[#f5f5f5] duration-300 p-5 relative w-full md:w-[70%] lg:w-[50%] h-[20rem] flex justify-center items-center gap-10 text-center flex-col`}>
         <div className={`flex gap-5 flex-col justify-center items-center ${Trans} `}>
          <em className='w-[70%] text-[1.2rem] duration-300'>{testimonials[current].testimonial}</em>
           <div className='flex justify-center items-center flex-col gap-2 top-[100%]'>
             <Avatar/>
             <em className=''>{testimonials[current].name}</em>
          </div>
        </div>
       </div>
      </div>
      <div onMouseDown={() => setFront(true)} onMouseUp={() => setFront(false)} onClick={next} className={`w-5 h-5 absolute right-0 md:right-10 lg:right-20 duration-500 rotate-45 border-t border-r border-b-[#f5f5f5] border-l-[#f5f5f5] cursor-pointer ${front ? "scale-75" : "scale-100"}`}></div>
    </div>
  </section>
  )
}
