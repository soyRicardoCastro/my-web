import React from "react";
import {Section, Title, Subtitle} from "../primitives";
import {Row, Spacer} from "@nextui-org/react";

const LastButNotLeastSection = () => {
  return (
    <Section css={{zIndex: "$10"}}>
      <Spacer css={{"@xsMax": {mt: "$14"}}} y={6} />
      <Row justify="center">
        <Title>Last&nbsp;</Title>
        <Title color="warning">but&nbsp;</Title>
      </Row>
      <Row justify="center">
        <Title>not&nbsp;</Title>
        <Title color="pink">least.</Title>
      </Row>
      <Row justify="center">
        <Subtitle css={{textAlign: "center"}}>Contact Me.</Subtitle>
      </Row>
    </Section>
  );
};

export default LastButNotLeastSection