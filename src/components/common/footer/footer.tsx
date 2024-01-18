import React from 'react'
import { Contact } from './contact'
import { CopyRight } from './copyRight'

export const Footer = () => {
  return (
    <footer className='bg-[#f5f5f5] w-full p-10'>
        <Contact/>
        <CopyRight/>
    </footer>
  )
}
