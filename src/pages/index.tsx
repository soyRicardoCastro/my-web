import { Container } from "@nextui-org/react";
import { Nav, Hero, Section } from '../components'
import { FeaturesGrid } from '../components/features-grid'
import { topFeature } from '../content/top-features'

export default function Home () {
  return (
    <Container>
      <Nav />
      <Hero />
      <Section>
        <FeaturesGrid lg={6} features={topFeature} />
      </Section>
    </Container>
  )
}
