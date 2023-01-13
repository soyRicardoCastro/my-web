import Link from 'next/link'
import { ProjectCard } from '../../components'
import { projects } from '../../constants'

function Projects () {

  return (
    <section className="py-12 flex items-center justify-center flex-col gap-6 w-full mx-auto">
      <h2 className='text-center text-2xl font-black text-gray-200 mb-4'>A bite of my recent <span className="fancy-underline">work</span></h2>
      
      {projects.map((project, index) => (
        <ProjectCard
          key={`project-home-${index}`}
          {...project}
        />
      ))}

      <Link href='/projects' className='text-md font-bold text-gray-300 underline hover:text-white'>
        See all projects
      </Link>

    </section>
  )
}

export default Projects
