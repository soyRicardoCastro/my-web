import Link from 'next/link'
import { LinkIcon } from '@heroicons/react/24/outline'
import { ProjectImagesPreview, TechTag } from '.'

function ProjectCard ({
  name = "Name",
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt voluptatum repudiandae accusantium sequi! Culpa eos eveniet veritatis illum expedita.",
  slug = "froz-mern-typescript",
  techTags = [{
    name: "React",
    url: "/logos/react.svg",
    color: "bg-sky-600/80"
  },
  {
    name: "Esbuild",
    url: "/logos/esbuild.svg",
    color: "bg-yellow-500/80"
  },],
  className = '',
  webUrl = '#',
  urlDesktop,
  urlMobile
}) {
  return (
    <article className={`w-full h-auto flex flex-col items-center justify-center gap-2 bg-gray-700/20 p-4 rounded-md transition ease delay-150 ${className}`}>
      <header>
        <ProjectImagesPreview
          name={name}
          urlDesktop={urlDesktop}
          urlMobile={urlMobile}
        />
      </header>

      <div className="w-[95%] flex flex-col justify-center gap-3">
        <h4>
          <a className="text-xl font-semibold text-left text-white hover:underline hover:text-gray-400 transition ease flex items-end gap-2" href={webUrl} target='_blank'>
            {name}
            <LinkIcon className='w-4 h-4 text-gray-400' />
          </a>
        </h4>

        <p className="text-base text-gray-300">{description} <Link className="font-medium text-sm underline text-sky-500 ml-1 hover:cursor-pointer hover:text-sky-700 transition" href={`/projects/${slug}`}>Read more</Link></p>

        <footer className="w-full flex flex-wrap gap-2">
          {techTags && techTags.map(tech => (
            <TechTag key={`${tech.name}`} {...tech} />
          ))}
        </footer>
      </div>
    </article>
  )
}

export default ProjectCard
