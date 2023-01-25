'use client'
import { useState } from 'react'
import {Box, Section, Title, Subtitle, BlockLink} from "../../primitives"
import { useTheme } from 'next-themes'
import {InView} from "react-intersection-observer"
import {Grid, Row, Col, Spacer} from "@nextui-org/react"
import {darkTheme} from "../../../theme"


const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {theme} = useTheme();
  const isDark = theme === "dark";

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer css={{"@xsMax": {mt: "$32"}}} y={10} />
      <Section css={{position: "relative"}}>
        <Box
          css={{
            position: "absolute",
            top: "-25%",
            right: "-30%",
            zIndex: "-$1",
            [`.${darkTheme} &`]: {
              right: 0,
              left: "-30%",
              "@xsMax": {
                top: "15%",
                left: "10% !important",
              },
            },
            "@xsMax": {
              top: "5%",
              right: "-40% !important",
            },
          }}
        >
          <img alt="theming background" src="/theming-gradient.svg" />
        </Box>
        <Row justify="flex-start">
          <Title>A bit more</Title>
        </Row>
        <Row justify="flex-start">
          <Title color="blue">about&nbsp;</Title>
          <Title>me.</Title>
        </Row>
        <Subtitle>
        Since I started my journey as a freelance web developer 2 years ago, I have done remote work for agencies, and collaborated with talented people to create digital products for consumer and commercial use. I am quietly confident, naturally curious and perpetually working to improve my skills.
        </Subtitle>
        
      </Section>
    </InView>
  );
};

export default AboutMe;