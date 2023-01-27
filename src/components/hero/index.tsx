import { Grid, Container, Row, Col, Spacer, Button } from '@nextui-org/react'
import { StyledTitle, StyledGradientTitle, StyledSubtitle } from "./styles"
import LooperBG from '../bg/looper'

export default function Hero () {
  return (
    <Container
      alignItems="center"
      as="section"
      css={{
        position: "relative",
        height: "calc(84vh - 76px)",
        margin: "0 auto",
        width: "90%",
        "@xsMax": {
          height: "calc(100vh - 64px)",
          width: "95%",
          overflow: "hidden",
        },
      }}
      display="flex"
      gap={0}
      justify="space-between"
      lg={true}
      wrap="nowrap"
    >
      <Row
        align="center"
        className="hero__content"
        css={{
          zIndex: "$2",
          "@mdMax": {
            mt: "80px",
            p: "0 8px",
          },
          "@xsMax": {
            mt: "0px",
          },
        }}
        wrap="wrap"
      >
        <Col
          css={{
            position: "relative",
            zIndex: "$2",
            "@md": {
              width: "50%",
            },
            "@mdMax": {
              width: "100%",
            },
          }}
        >
          <StyledTitle css={{mb: 0}}>Hi, I'm Ricardo Castro,&nbsp;</StyledTitle>
          <StyledGradientTitle css={{mb: 0}}>Full Stack&nbsp;</StyledGradientTitle>
          <StyledTitle css={{mb: 0, "@xsMax": {d: "inline-block"}}}>
            Web Developer.
          </StyledTitle>

          <StyledSubtitle className="hero__text-subtitle">
          I do what I love, I love developing, and I create solutions.
          </StyledSubtitle>
          <Spacer y={1.5} />
          <Grid.Container
            alignItems="center"
            css={{
              "@md": {
                mt: "$lg",
              },
            }}
            gap={0}
          >
            <Grid sm={3} xs={12}>
              <Button
                auto
                rounded
                css={{
                  maxHeight: "$space$14",
                  "@xsMax": {
                    width: "100%",
                    marginBottom: "$8",
                  },
                }}
                size="lg"
              >
                Get Started
              </Button>
            </Grid>
          </Grid.Container>
        </Col>
      </Row>
      <LooperBG
        css={{
          zIndex: "0",
          position: "absolute",
          transform: "translate(10%, 5%)",
        }}
      />
    </Container>
  )
}
