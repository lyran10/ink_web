import React from 'react'
import { Header } from '../common/headers'
import { Titles } from '../../constants/constants'
import { recentArtCards } from '../../data/data'

export const RecentArt = () => {
  return (
    <section className='w-full'>
      <Header header={Titles.recentArt}/>
      <div className='flex w-full flex-wrap justify-center gap-1'>
        {
          recentArtCards.map(({image}) => {
            return(
              <div className='w-[300px] h-[400px]'>
                <img  src={image} alt="" />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
