import React from 'react'
import { Banner } from './banner'
import { RecentArt } from './recentArt'

export const Home = () => {
  return (
    <div className='flex flex-col gap-[5rem]'>
      <Banner/>
      <div className='p-5'>
      <RecentArt/>
      </div>
    </div>
  )
}
