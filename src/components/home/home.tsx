import React from 'react'
import { Banner } from './banner'
import { RecentArt } from './recentArt'
import { Qoutes } from '../common/qoutes'
import { Titles } from '../../constants/constants'

export const Home = () => {
  return (
    <div className='flex flex-col gap-[5rem]'>
      <Banner/>
      <div className='p-5'>
      <RecentArt/>
      <Qoutes qoute={Titles.qoute1}/>
      <div className='h-[100vh]'></div>
      </div>
    </div>
  )
}
