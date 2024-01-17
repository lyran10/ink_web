import React from 'react'
import { Banner } from './banner'
import { RecentArt } from './recentArt'
import { Qoutes } from '../common/qoutes'
import { QuotesAndPara, Titles } from '../../constants/constants'
import { Studio } from './studio'
import { Artist } from './artist'
import { Testimonials } from './testimonials'

export const Home = () => {
  return (
    <main className='flex flex-col gap-[5rem]'>
      <Banner/>
      <div className='p-5'>
      <RecentArt/>
      <Qoutes qoute={QuotesAndPara.qoute1} lines={QuotesAndPara.aboutTattoo} bg="before:bg-quote"/>
      <Artist />
      <Qoutes qoute={QuotesAndPara.artistQuote} lines={""} bg="before:bg-artist"/>
      <Studio/>
      <Qoutes qoute={QuotesAndPara.studioQuote} lines={""} bg="before:bg-ladyTattoo"/>
      <Testimonials />
      <Qoutes qoute={QuotesAndPara.quote3} lines={""} bg="before:bg-quote3"/>
      <div className='h-[100vh]'></div>
      </div>
    </main>
  )
}
