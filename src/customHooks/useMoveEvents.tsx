import React,{useState} from 'react'
import { NavItems } from '../constants/constants'
import { moveNavCursor } from '../data/navItemsData'

type NavigationItems = {
    HOME: string;
    ABOUT: string;
    AWARDS: string;
    CONTACT: string;
  };


export const UseMoveEvents = () => {
const [move,setMove] = useState<string>("translate-x-0")
const [width,setWidth] = useState<string>("w-[0%]")

const mouseOver = (e : React.MouseEvent<HTMLLIElement>) => {
    setMove(moveNavCursor[e.currentTarget.id as keyof NavigationItems].move)
    setWidth(moveNavCursor[e.currentTarget.id as keyof NavigationItems].width)
}

const mouseLeave = () => {
    setMove("translate-x-0")
    setWidth("w-[0%]")
}

const events = {
    onMouseOver : mouseOver,
    onMouseLeave : mouseLeave
}


return [move,events,width]
}
