import { projects } from '../constants'

export default function page () {
  return (
    <section className='flex flex-col items-center justify-center gap-12 w-full py-12 px-4 '>
      <h1 className='text-center text-gray-200 text-2xl font-bold'>A List of all my <span className='fancy-underline [z-index:-10]'>projects</span></h1>

      <div className='w-full px-2 border border-gray-200 rounded-md flex flex-col justify-center items-center gap-4 bg-gray-900/70'>
        {projects.map((project, index) => (
          <article
            key={`project-${index}-${project.name}`}
            className='w-full p-2 border-b border-gray-300 text-sm gap-2 flex flex-col gap-4'
          >
          <h3 className='text-xl font-bold text-left'>{project.name}</h3>

          <p className='text-gray-300 text-md'>{project.description}</p>

          <p><strong className='font-bold'>Techs used:</strong> {project.techTags.map((tech, i) => <span className='capitalize' key={`tech-${i}-${tech.name}`}>{tech.name} </span>)}</p>

          <a className='[font-style:italic]' href={project.githubUrl} target='_blank'>Github Repo</a>
        </article>
        ))}
      </div>
    </section>
  )
} 
