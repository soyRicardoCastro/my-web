'use client'

import { Grid, Container, Row, Col, Spacer, Button } from '@nextui-org/react'
import {StyledTitle, StyledGradientTitle, StyledSubtitle} from "./Hero/styles"
import { LooperBG } from '../../components'

export default function Hero() {
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
          width: "95%"
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
          className="hero__left-container"
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
                className="hero__get-started-button"
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
        <Col
          className="hero__right-container"
          css={{
            position: "relative",
            height: "100%",
            "@mdMax": {
              display: "none",
            },
          }}
          span={6}
        >
          {/*<DynamicHeroComponents />*/}
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

/**
 * <Container className="py-8 px-3 flex items-center justify-evenly flex-col min-h-[calc(100vh-50px)] md:w-3/4 md:mx-auto"
      css={{
        paddingTop: "50px",
        paddingBottom: "50px",
        justifyContent: "space-evenly",
        '@md': {
          maxWidth: '80%'
        }
      }}
    >
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className='flex flex-col gap-8'>
          <StyledTitle css={{mb: 0}}>Make&nbsp;</StyledTitle>
          <StyledGradientTitle css={{mb: 0}}>beautiful&nbsp;</StyledGradientTitle>
          <StyledTitle css={{mb: 0, "@xsMax": {d: "inline-block"}}}>
            websites regardless of your design experience.
          </StyledTitle>
    
          <StyledSubtitle className="hero__text-subtitle">
            Beautiful, fast and modern React UI library.
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
                className="hero__get-started-button"
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
          <Text
            h3
            size="$5xl"
            className="text-3xl md:text-6xl md:text-left md:w-3/4 font-bold text-center"
            css={{
              fontSize: "$3xl",
              textAlign: "center",
              '@md': {
                maxWidth: "80%",
                fontSize: "$6xl",
                textAlign: "left"
              }
            }}
          >Frontend, Backend & Mobile <span className='fancy-underline [z-index:-1]'>Developer</span></Text>
          
          <Text
            h5
            css={{
              textAlign: "center",
              fontSize: "$md",
              fontWeight: "$light",
              '@md': {
                textAlign: 'left',
                fontSize: "$xl",
                width: "80%",
                fontWeight: "$semibold"
              }
            }}
          >
            I do what I love, I love developing, and I create solutions.
          </Text>
        </div>

      
      
        <Image
          showSkeleton
          src='/rocket-animation.gif'
          alt='Rocket Gif'
          width={300}
          height={300}
        />
        
      </div>


      <div className='flex items-center flex-col justify-center gap-4'>
        <Image src="/mf-avatar.svg" alt="Avatar of Ricardo Castro" width={100} height={100}/>

        <div className="flex items-center justify-center flex-col gap-2 mt-6">
          <div className="w-[1px] h-14 bg-gray-200" />

          <p className="font-thin font-italic text-sm md:text-md md:font-normal [font-style:italic]">Scroll Down</p>

          <div className='flex gap-1 items-end'>
            <span className="w-[1px] h-3 bg-gray-200 [transform:rotate(-35deg)_translateX(1px)_translateY(1px)] rounded-md [z-index:-1]" />
            <span className="w-[1px] h-4 [transform:translateY(-0.6px)] bg-gray-200 rounded-md [z-index:-1]" />
            <span className="w-[1px] h-3 [transform:rotate(35deg)_translateX(-1.3px)_translateY(1px)] rounded-md bg-gray-200 [z-index:-1]" />
          </div>
        </div>
      </div>

      <div className='relative'>
        <Image
          src="/rocket-game.gif"
          alt="Gif rocket game"
          width={100}
          height={100}
          className="z-100"
        />
      </div>
    </Container>
 */