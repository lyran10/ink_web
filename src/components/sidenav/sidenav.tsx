import React,{useState} from 'react'
import { ContextState } from '../../context/context'
import { Context } from 'vm'

export const Button = () => {
  const {showItems,setShowItems,arrow,setArrow} = ContextState() as Context;
  const [move,setMove] = useState<string>("translate-y-[50vh] translate-x-[80vh] text-[100px]")
  
  const [background,setBackground] = useState<string>("bg-transparent")

  const handleArrow = () => {
    setBackground(z => z === "bg-transparent" ? "bg-black" : "bg-transparent")
    if(arrow.arrow1 === "-translate-y-2"){
      setArrow({arrow1 : "-rotate-[33deg] -translate-y-2",arrow2 : "rotate-[90deg] translate-x-[14px] w-[36px]",arrow3 : "rotate-[33deg] translate-y-2"})
      setShowItems("translate-x-6")
    }else{
      setArrow({arrow1 : "-translate-y-2",arrow2 : "w-8",arrow3 : "translate-y-2 "})
      setShowItems("translate-x-0")
    }
  }

  return (
    <div className='mr-10'>
         <div onClick={handleArrow} className='cursor-pointer duration-500 rounded-full flex justify-center items-center flex-col h-[40px] w-[40px]'>
        <div className={`w-8 h-[1px] bg-cyan-500 ${arrow.arrow1} duration-200 ${move === "translate-y-0 translate-x-0" ? "bg-cyan-200" : ""} `}></div>
        <div className={`h-[1px] bg-cyan-500 ${move === "translate-y-0 translate-x-0" ? "bg-cyan-200" : ""} duration-200 ${arrow.arrow2}`}></div>
        <div className={`w-8 h-[1px]  bg-cyan-500 ${arrow.arrow3} duration-200 ${move === "translate-y-0 translate-x-0" ? "bg-cyan-200" : ""}`}></div>
      </div>
    </div>
  )
}
