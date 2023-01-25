'use client'
import { Container } from '@nextui-org/react'

import { Hero, Projects, Contact } from "./views"
import AboutMe from './components/home/about-me'
import ProjectsSection from './components/home/projects'

import { Section } from './components/primitives'
import FeaturesGrid from './components/features-grid'
import LastButNotLeast from './components/last-but-not-least'

import { topFeature } from "./content/top-features"

export default function Home() {
  return (
    <Container>
      <Hero />
      <Section>
        <FeaturesGrid lg={6} features={topFeature} />
      </Section>

      <AboutMe  />
      <ProjectsSection />
      <LastButNotLeast />
      <Contact />
    </Container>
  )
}
