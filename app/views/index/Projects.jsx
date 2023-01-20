import Link from 'next/link'
import { ProjectCard } from '../../components'
import { projects } from '../../constants'

function Projects () {
  const projectsHome = projects.slice(0, 5)

  return (
    <section className="py-12 flex items-center justify-center flex-col gap-6 w-full mx-auto md:w-3/4">
      <h2 className='text-center text-2xl md:text-3xl md:my-6 font-black text-gray-200 mb-4'>A bite of my recent <span className="fancy-underline">work</span></h2>
      
      {projectsHome.map((project, index) => (
        <ProjectCard
          key={`project-home-${index}`}
          {...project}
        />
      ))}

      <Link href='/projects' className='text-md md:text-xl font-bold text-gray-300 underline hover:text-white'>
        See all projects
      </Link>

    </section>
  )
}

export default Projects
