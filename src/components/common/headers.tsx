import React from 'react'

type Props = {
  header : string;
}

export const Header = ({header} : Props) => {
  return (
    <h1 className='bg-orange-600 w-[100%] font-bold text-[#f5f5f5] ps-5 text-[1.5rem] md:text-[2rem] lg:text-[2rem] mb-[50px]'><em className='text-[#f5f5f5]'>{header}</em></h1>
  )
}
