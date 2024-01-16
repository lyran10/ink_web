import React from 'react'
import ButtonsHOC from '../HOC/highOrderComponents'
import { Buttons } from '../../constants/constants'

type Props = {
    scan : string,
    mouseOver : () => void,
    mouseLeave : () => void,
}

  export const DiscussButton = ({scan,mouseOver,mouseLeave} : Props) => {
  return  <button onMouseOver={mouseOver} onMouseLeave={mouseLeave} className={`py-2 px-5 text-[#f5f5f5] bg-[#741102] font-bold self-start relative overflow-hidden z-[1] duration-300 hover:bg-[rgba(116,17,2,.50)] before:absolute before:content-"" before:bg-slate-300 before:h-full before:w-full before:left-0 before:duration-500 before:z-[-1] after:absolute after:content-"" after:bg-[#741102] after:h-full after:w-full after:left-0 after:duration-500 after:z-[-1] ${scan}`}>{Buttons.discuss}</button>
}

export default ButtonsHOC(DiscussButton)