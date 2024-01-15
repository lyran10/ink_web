import React from 'react'

type Props = {
  header : string;
}

export const Header = ({header} : Props) => {
  return (
    <h1 className='bg-[#741102] w-[50%] font-bold text-[#f5f5f5] ps-5 text-[1.5rem] md:text-[2rem] lg:text-[2rem] mb-10'>{header.split(" ")[0]} <em className='text-[#f5f5f5]'>{header.split(" ")[1]}</em></h1>
  )
}
