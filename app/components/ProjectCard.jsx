import Link from 'next/link'
import { LinkIcon } from '@heroicons/react/24/outline'
import { ProjectImagesPreview, TechTag } from '.'
import { FeatureItem } from './features-grid/styles'

function ProjectCard ({
  name,
  description,
  slug,
  techTags,
  className,
  webUrl,
  urlDesktop,
  urlMobile
}) {
  return (
    <FeatureItem className={`h-auto flex flex-col items-center justify-center gap-2 bg-gray-700/20 p-4 rounded-md transition ease delay-150 ${className}`}>
      <header className='w-full block'>
        <ProjectImagesPreview
          name={name}
          urlDesktop={urlDesktop}
          urlMobile={urlMobile}
        />
      </header>

      <div className="w-[95%] flex flex-col justify-center gap-3 md:gap-4">
        <h4>
          <a className="text-xl md:text-2xl font-semibold text-left text-white hover:underline hover:text-gray-400 transition ease flex items-end gap-2" href={webUrl} target='_blank'>
            {name}
            <LinkIcon className='w-4 h-4 text-gray-400' />
          </a>
        </h4>

        <p className="text-base md:text-md text-gray-300">{description} <Link className="font-medium text-sm md:text-base underline text-sky-500 ml-1 hover:cursor-pointer hover:text-sky-700 transition" href={`/projects/${slug}`}>Read more</Link></p>

        <footer className="w-full flex flex-wrap gap-2">
          {techTags && techTags.map(tech => (
            <TechTag key={`${tech.name}`} {...tech} />
          ))}
        </footer>
      </div>
    </FeatureItem>
  )
}

export default ProjectCard
