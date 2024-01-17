import React from 'react'
import avatar from "../../images/avatar.png"

export const Avatar = () => {
  return (
    <div className={`w-16 h-16 rounded-full`}>
      <img className='rounded-full ' src={avatar} alt="" />
    </div>
  )
}
