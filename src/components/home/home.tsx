import React from 'react'
import { Banner } from './banner'
import { RecentArt } from './recentArt'
import { Qoutes } from '../common/qoutes'
import { QuotesAndPara, Titles } from '../../constants/constants'
import { Studio } from './studio'
import { Artist } from './artist'
import { Testimonials } from './testimonials/testimonials'
import { SocialMedia } from '../socialMedia/socialMedia'
import { Footer } from '../common/footer/footer'
import { Form } from './form'

export const Home = () => {
  return (
    <main className='flex flex-col gap-[5rem] overflow-hidden'>
      <Banner/>
      <div className='hidden md:block lg:block'><SocialMedia /></div>
      <div className='p-0 md:p-5 lg:p-5'>
      <RecentArt/>
      <Qoutes qoute={QuotesAndPara.qoute1} lines={QuotesAndPara.aboutTattoo} bg="before:bg-quote"/>
      <Studio/>
      <Qoutes qoute={QuotesAndPara.artistQuote} lines={""} bg="before:bg-artist"/>
      <Artist />
      <Qoutes qoute={QuotesAndPara.studioQuote} lines={""} bg="before:bg-ladyTattoo"/>
      <Testimonials />
      <Qoutes qoute={QuotesAndPara.quote3} lines={""} bg="before:bg-quote3"/>
      <Form />
      <Footer/>
      {/* <div className='h-[100vh]'></div> */}
      </div>
    </main>
  )
}
