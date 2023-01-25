'use client'

import React, {useState} from "react";
import {Section, Title, Subtitle} from "../../primitives";
import {InView} from "react-intersection-observer";
import {Grid, Row, Col, Card, Spacer, Text} from "@nextui-org/react"
import ProjectCard from "./project-card";
import { projects } from "../../../constants";

const ProjectsSection = () => {
  const [_, setIsVisible] = useState(false);

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer css={{"@xsMax": {mt: "$14"}}} y={10} />
      <Section css={{zIndex: "$10"}}>
        <Row justify="flex-start">
          <Title>Work</Title>
          <Spacer x={0.5} />
          <Title color="cyan">experience.</Title>
        </Row>
        <Row justify="flex-start">
          <Title>Personal</Title>
          <Spacer x={0.5} />
          <Title color="warning">projects.</Title>
        </Row>
        <Subtitle>
        Here are the most outstanding projects in which I have participated, with their original code and link to the web.
        </Subtitle>
      </Section>

      <Spacer y={3} />

      <div className='flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {projects.map((project, i) => (
          <ProjectCard {...project} index={`project-${i}-${project.name}`} />
        ))}
      </div>
    </InView>
  )
}

export default ProjectsSection