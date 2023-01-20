import { projects } from '../constants'

export default function page () {
  return (
    <section className='flex flex-col items-center justify-center gap-12 w-full py-12 px-4'>
      <h1 className='text-center text-gray-200 text-2xl md:text-3xl mb-4 font-bold'>A List of all my <span className='fancy-underline [z-index:-10]'>projects</span></h1>

      <div className='w-full md:w-3/4 md:mx-auto px-2 border border-gray-200 rounded-md flex flex-col justify-center items-center gap-4 bg-gray-900/70'>
        {projects.map((project, index) => (
          <article
            key={`project-${index}-${project.name}`}
            className='w-full p-2 border-b border-gray-300 text-sm md:text-base gap-2 flex flex-col gap-4 hover:bg-black/60 transition ease delay-150 rounded-md'
          >
          <h3 className='text-xl md:text-2xl font-bold text-left'>{project.name}</h3>

          <p className='text-gray-300 text-md md:text-xl'>{project.description}</p>

          <p><strong className='font-bold'>Techs used:</strong> {project.techTags.map((tech, i) => <span className='capitalize' key={`tech-${i}-${tech.name}`}>{tech.name} </span>)}</p>

          <a className='[font-style:italic]' href={project.githubUrl} target='_blank'>Github Repo</a>
        </article>
        ))}
      </div>
    </section>
  )
} 
