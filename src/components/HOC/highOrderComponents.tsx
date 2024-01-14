import React,{useState,useEffect} from 'react'
import { Timers } from '../../constants/constants'

type Props = {
    scan : string,
    mouseOver : () => void,
    mouseLeave : () => void,
}

export const ButtonsHOC = (OriginalComponent : React.ComponentType<Props>) => {

    const NewComponent : React.FC = () => {
        const [scan,setScan] = useState<string>('before:top-[100%] after:top-[200%]')
        const [hovered,setHovered] = useState<boolean>(false)

        const mouseOver = () => {
            setHovered(true)
            setScan('before:top-[100%] after:top-[200%]')
        }

        const mouseLeave = () => {
            setHovered(false)
        }

        useEffect(() => {
            if(!hovered){
                let interval = setInterval(() => { setScan('before:top-0 after:top-0') },Timers.time)
                let timeOut = setTimeout(() => { setScan('before:top-[100%] after:top-[200%]') },Timers.time)
    
                return () =>{
                    clearInterval(interval)
                    clearTimeout(timeOut)
                }
            }
        },[scan,hovered])

        return <OriginalComponent scan={scan} mouseOver={mouseOver} mouseLeave={mouseLeave}/>
    }

    return NewComponent
}

export default ButtonsHOC
