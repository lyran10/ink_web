import React from 'react'

type Props = {
  header : string;
}

export const Header = ({header} : Props) => {
  return (
    <h1 className='font-bold text-[#1f2937] text-[4rem]'>{header.split(" ")[0]} <em className='text-[#741102]'>{header.split(" ")[1]}.</em></h1>
  )
}
