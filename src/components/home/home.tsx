import React from 'react'
import { Banner } from './banner'
import { RecentArt } from './recentArt'
import { Qoutes } from '../common/qoutes'
import { QuotesAndPara, Titles } from '../../constants/constants'
import { Studio } from './studio'

export const Home = () => {
  return (
    <div className='flex flex-col gap-[5rem]'>
      <Banner/>
      <div className='p-5'>
      <RecentArt/>
      <Qoutes qoute={QuotesAndPara.qoute1} lines={QuotesAndPara.aboutTattoo} bg="before:bg-quote"/>
      <Studio/>
      <Qoutes qoute={QuotesAndPara.studioQuote} lines={""} bg="before:bg-ladyTattoo"/>
      <div className='h-[100vh]'></div>
      </div>
    </div>
  )
}
