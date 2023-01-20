import { Form } from '../components'

export default function Contact () {
  return (
    <section className='p-8 flex flex-col justify-center gap-8'>
      <h2 className='text-center text-2xl md:text-3xl font-bold'>Talk with me</h2>

      <p className='text-center md:text-xl md:w-2/4 md:mx-auto'>Estoy abierto a nuevos proyectos, ideas y negocios, enviame un email de preferencia y hablemos mas sobre eso.</p>

      <Form />
      
      <div className='flex flex-col gap-4 md:w-3/4 md:mx-auto'>
        <h3 className='text-left font-semibold text-xl text-gray-300'>Follow me here</h3>

        <ul className='flex flex-col gap-2 text-md font-md'>
          <li>
            <a href='/' target='_blank'>Linkedin</a>
          </li>
          <li>
            <a href='/' target='_blank'>Github</a>
          </li>
          <li>
            <a href='/' target='_blank'>Instagram</a>
          </li>
          <li>
            <a href='/' target='_blank'>Twitter</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
