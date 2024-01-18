import React from 'react'
import { socialMedia } from '../../../data/data'

export const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center items-center gap-3'>
    {
      socialMedia.map(({id,icon,name} : {id :string,name : string,icon :JSX.Element},index : number) => {
        return(
          <div key={index} className='w-8 h-8 bg-[#741102] text-[#f5f5f5] m-auto flex justify-center items-center'>{icon}</div>
        )
      })
    }
    </div>
  )
}
