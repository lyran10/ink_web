import React from 'react'
import avatar from "../../images/avatar.png"

export const Avatar = () => {
  return (
    <div className={`w-16 h-16 border border-[#741102] border-[5px] rounded-full`}>
      <img className='rounded-full' src={avatar} alt="" />
    </div>
  )
}
