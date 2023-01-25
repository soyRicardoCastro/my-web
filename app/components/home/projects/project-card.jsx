'use client'

import { Row, Text, Image, Badge, Spacer } from '@nextui-org/react'
import Link from 'next/link'

import { FeatureItem } from '../../features-grid/styles'
import LinkIcon from '../../icons/Link'

export default function ProjectCard ({
  urlDesktop,
  name,
  description,
  techTags,
  slug
}) {
  return (
    <div>
      <FeatureItem>
        <div className='bg-gray-800/20 w-full rounded-md p-1'>
          <Image showSkeleton src={urlDesktop} alt={`Desktop preview of ${name}`} className='w-full h-full' />
        </div>
        <Row align="center">
          <Text
            css={{
              my: 0,
              fontSize: "1.3rem",
              fontWeight: "$semibold",
              mr: "$6",
              ml: "$2"
            }}
          >
            {name}
          </Text>
          
        </Row>
        <Row align="center" css={{px: "$2", pt: "$4", pb: "$2"}}>
          <Text className="feature-description" css={{color: "$accents8"}}>
            {description}
          </Text>
        </Row>

        <div>
          <Text strong css={{ mr: "$6", ml: "$2" }}>Techs used:</Text>

          {techTags.map((tech, i) => (
            <Badge id={`tech-${tech.name}-${name}-${i}`} color="primary" variant="flat">{tech.name}</Badge>
          ))}
        </div>

        <Link href={`/projects/${slug}`} className='flex gap-2 text-white text-sm ml-2 mt-2'>
          Read more <LinkIcon />
        </Link>
      </FeatureItem>
    </div>
  )
}