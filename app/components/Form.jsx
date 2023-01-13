'use client'

export default function Form () {
  return (
    <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-6 text-md font-semibold'>
      <label className='flex flex-col gap-2'>
        Name

        <input name='name' className='bg-transparent text-gray-200 border border-2 p-2 rounded-md font-medium text-white' />
      </label>
      <label className='flex flex-col gap-2'>
        Email

        <input name='email' placeholder='isabel@mail.com' className='bg-transparent text-gray-200 border border-2 p-2 rounded-md font-medium text-white' />
      </label>
      <label className='flex flex-col gap-2'>
        Subject

        <textarea name='subject' className='min-h-[150px] max-h-[250px] bg-transparent text-gray-200 border border-2 p-2 rounded-md font-medium text-white' />
      </label>

      <button className='p-2 bg-transparent rounded-md border border-2'>Send</button>
    </form>
  )
}