import React,{useState,useEffect} from 'react'
import logo from "../../images/logo/ink.png"
import { ContextState } from '../../context/context'
import { Context } from 'vm'

export const LogoLoader = () => {
  const {setShowHome} = ContextState() as Context
  const [showLogo,setShowLogo] = useState<boolean>(false)
  const [scan,setScan] = useState<boolean>(false)
  const [show,setShow] = useState<boolean>(false)

  useEffect(() => {
    setShowLogo(true)

    if(scan){
      document.querySelector("#logo")?.addEventListener("animationend",() => {
        setShow(true)
        setShowHome(true)
        console.log("end")
      })
    }
  },[scan])

  return (
    <div className={`h-screen w-full fixed bg-[#f5f5f5] flex justify-center items-center duration-500 ${show ? "opacity-[0] z-[-1]" : "opacity-[1] z-[1001]"}`}>
      <div id="logo" onAnimationEnd={() => setTimeout(() => {setScan(true)},200)} className={`flex justify-center items-center flex-column h-[18rem] w-[25rem]  ${showLogo ? "animate-[logo_0.6s_linear_1]" : ""} duration-500 relative before:absolute before:content-""  before:left-[10%] before:h-full before:bg-[#f5f5f5] before:shadow-sm before:opacity-[0.6] before:duration-[3s] ${scan ? "before:animate-[scan_3s_linear_1] before:w-[20%]" : "before:w-[1%]"}`}>
      <img src={logo} className='h-full w-full'/>
      </div>
    </div>
  
  )
}
