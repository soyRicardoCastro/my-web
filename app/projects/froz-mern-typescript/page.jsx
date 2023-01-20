import { projects } from '../../constants'

export default function page () {
  const project = projects[0]

  return (
    <section className='md:w-3/4 md:mx-auto flex flex-col shadow-lg'>
      <h2>{project.name}</h2>
    </section>
  )
}