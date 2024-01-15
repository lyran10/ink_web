import React from 'react'

type Props = {
  header : string;
}

export const Header = ({header} : Props) => {
  return (
    <h1 className='font-bold text-[#353935] text-[3rem] md:text-[4rem] lg:text-[4rem] mb-10'>{header.split(" ")[0]} <em className='text-[#741102]'>{header.split(" ")[1]}.</em></h1>
  )
}
