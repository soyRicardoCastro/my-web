'use client'

import { useState } from 'react'

export default function Form () {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: ''
  })
  const [hrefData, setHrefData] = useState('mailto:ricardocastro.dev@gmail.com')

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    handleClick()
  }

  const handleClick = () => {
    setHrefData(
      prev =>
      `${prev}?subject=${form.name}&body=${form.subject}`
    )
  }

  return (
    <form onSubmit={e => e.preventDefault()} className='md:w-3/4 md:mx-auto flex flex-col gap-6 text-md font-semibold'>
      <label className='flex flex-col gap-2'>
        Name

        <input
          name='name'
          className='bg-transparent text-gray-200 border border-2 p-2 rounded-md font-medium text-white'
          placeholder="Isabel"
          onChange={handleChange} />
      </label>
      <label className='flex flex-col gap-2'>
        Email

        <input
          name='email'
          placeholder='isabel@mail.com'
          className='bg-transparent text-gray-200 border border-2 p-2 rounded-md font-medium text-white'
          onChange={handleChange} />
      </label>
      <label className='flex flex-col gap-2'>
        Subject

        <textarea
          name='subject'
          className='min-h-[150px] max-h-[250px] bg-transparent text-gray-200 border border-2 p-2 rounded-md font-medium text-white'
          placeholder='I have a great idea, lets talk more about it...'
          onChange={handleChange} />
      </label>

      <a className='p-2 bg-transparent rounded-md border border-2 text-center' href={hrefData} onClick={handleClick} target='_blank'>Send</a>
    </form>
  )
}
