import { Form } from '../../components'

export default function Contact () {
  return (
    <section className='flex flex-col justify-center gap-6 p-12 bg-gray-900'>
      <h3 className='text-center text-2xl font-bold'>And now... <span className='fancy-underline'>Contact Me</span></h3>

      <Form />
    </section>
  )
}