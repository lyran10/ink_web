import React,{ useState } from 'react'
import { ContextState } from '../../context/context'
import { Context } from 'vm'

export const SidenavButton = () => {
  const { setShowItems, arrow, setArrow } = ContextState() as Context;
  
  const handleArrow = () => {
    if(arrow.arrow1 === "-translate-y-2"){
      setArrow({arrow1 : "-rotate-[33deg] -translate-y-2 w-8",arrow2 : "rotate-[90deg] translate-x-[15px] w-[36px]",arrow3 : "rotate-[33deg] translate-y-2 w-8"})
      setShowItems("left-0 opacity-[1]")
    }else{
      setArrow({arrow1 : "-translate-y-2",arrow2 : "w-5",arrow3 : "translate-y-2"})
      setShowItems("left-[100%] opacity-[0]")
    }
  }

  return (
    <div className='mr-10'>
      <div onClick={handleArrow} className='cursor-pointer duration-500  rounded-full flex justify-center items-center flex-col h-[40px] w-[40px]'>
        <div className={`w-8 h-[1px] self-end ${arrow.arrow1 === "-rotate-[33deg] -translate-y-2 w-8" ? "bg-[#f5f5f5]" : "bg-[rgb(183,140,86)]"}  ${arrow.arrow1} duration-200`}></div>
        <div className={`h-[1px] self-end ${arrow.arrow1 === "-rotate-[33deg] -translate-y-2 w-8" ? "bg-[#f5f5f5]" : "bg-[rgb(183,140,86)]"}  ${arrow.arrow2} duration-200`}></div>
        <div className={`w-8 h-[1px] self-end ${arrow.arrow1 === "-rotate-[33deg] -translate-y-2 w-8" ? "bg-[#f5f5f5]" : "bg-[rgb(183,140,86)]"}  ${arrow.arrow3} duration-200`}></div>
      </div>
    </div>
  )
}