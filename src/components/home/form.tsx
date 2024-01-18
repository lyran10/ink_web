import React from 'react'
import { inputs } from '../../data/data'
import { UseForm } from '../../customHooks/useForm'

type Events = {
  onChange : () => void 
}

export const Form = () => {
const [formData, events] = UseForm()

  return (
    <div className='text-[#f5f5f5] w-full'>
      <h1 className='text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-center mt-10 mb-10 text-[rgb(183,140,86)]'><em>Let's turn those aspirations into inked masterpieces.</em></h1>
      <form className=' w-full md:w-[80%] lg:w-[70%] m-auto p-10 shadow-testimonials bg-[rgba(0,0,0,.18)] mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-black font-bold'>

          {
            inputs.map(({id,type,content}) => {
              return(
                <label key={id} className={`p-2 flex flex-col  ${id === "firstName" || id === "lastName" ? "col-span-2 md:col-span-1 lg:col-span-1" : "col-span-2"}`}>
                  <span className='text-[#f5f5f5]'>{content}</span>
                  <input {...events as Events} className='p-2 outline-none border-[1px] border-orange-600' type={type} name={id} placeholder={content}/>
                </label>
              )
            })
          }

          <label className='p-2 flex flex-col col-span-2'>
            <span className='text-[#f5f5f5]'>When are you planing?</span>
            <select className='p-2 outline-none border-[1px] border-orange-600' name="" id="">
              <option value="In a Week">In a Week</option>
              <option value="Within a month">Within a month</option>
              <option value="In the next three months">In the next three months</option>
            </select>
          </label>
        </div>
           
            <button type='submit' className='py-2 px-5 bg-[#741102] mt-10 duration-500 hover:bg-[rgba(116,17,2,.50)]'>Let's start</button>
      </form>
    </div>
  )
}
