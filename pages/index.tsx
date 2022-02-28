import { Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Centered } from '../components/Centered'
import sabs from '/public/sabs.jpg'
import map from '/public/map.png'

const Root = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 100px;
`

const Page = styled.div`
  margin: 0 44px;
`

const Heading1 = styled.h1`
  margin: 0;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 300;
  font-size: 5rem;
  line-height: 1.167;
  letter-spacing: -0.01562em;

  @media only screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 2.2rem;
  }
`

const Heading2 = styled.h1`
  margin: 0;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 300;
  font-size: 3rem;
  line-height: 1.2;
  letter-spacing: -0.00833em;

  @media only screen and (max-width: 900px) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 1.1rem;
  }
`

const Heading3 = styled.h1`
  margin: 0;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.167;
  letter-spacing: 0em;

  @media only screen and (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 1rem;
  }
`

const Text = styled.p`
  margin: 0;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;

  @media only screen and (max-width: 700px) {
    width: 150px;
    height: 150px;
  }

  @media only screen and (max-width: 620px) {
    display: block;
    text-align: center;
    margin: 0 auto 24px auto;
  }
`

const CTA = () => (
  <CtaContainer onClick={() => window.open("https://instagram.com/sabrina.satti")}>
        <Text>
          Contact via Instagram
        </Text>
      </CtaContainer>
)

const SectionContainer = styled.div`
  margin: 24px 0;
`

const Section = ({children, title}: {children: React.ReactNode, title?: string}) => (
  <SectionContainer>
  <Centered>
    {title && <CenterText><Typography variant="h4">{title}</Typography></CenterText>}
    {children}
  </Centered>
  </SectionContainer>
)

const TitleFlex = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media only screen and (max-width: 620px) {
    display: block;
    text-align: center;
  }
`

const TitleContainer = styled.div`
  margin-bottom: 64px;

  @media only screen and (max-width: 420px) {
    margin-bottom: 44px;
  }
`

const TitleSection = () => (
  <TitleContainer>
    <Centered>
      <TitleFlex>
    <ImageContainer>
      <Image priority src={sabs}/>
      </ImageContainer>
      <div>
      <Heading1>👋🏽 Sabrina Satti</Heading1> 
      <Heading2>🦮 Dog Walker</Heading2>
      <Heading3>📍 Elephant &amp; Castle, London</Heading3>
      </div>
      </TitleFlex>
    </Centered>
  </TitleContainer>
)

const CenterText = styled.p`
  text-align: center;
`

const AboutMeSection = () => (
  <Section title='About Me'>
      <Text>
        All my life I&apos;ve been dog obsessed and I&apos;m so grateful that I get to spend my working day with them.
      </Text>
      <Text>
        I live in Elephant &amp; Castle with my boyfriend and our sausage dog, <a target="_blank" rel="noreferrer" href="https://instagram.com/parker.dachshund">Parker</a>.
      </Text>
      <Text>
        I&apos;ve been looking after and walking dogs for over 7 years. In that time I&apos;ve worked with all kinds of dogs:
        <ul>
          <li>Small (e.g. mini poms)</li>
          <li>Large (e.g. American Akitas)</li>
          <li>Anxious (e.g. my own dog 🙄)</li>
          <li>Happy-go-lucky</li>
          <li>Energetic</li>
        </ul>
        </Text>
        <Centered><CTA/></Centered>
  </Section>
)

const CtaContainer = styled.div`
  background: linear-gradient(45deg, #9d65cf, #caa7ea);
  background-size: 400% 400%;
  padding: 14px;
  border-radius: 5px;
  box-shadow: 2px 3px 10px #888888;
  color: white;
  cursor: pointer;
  margin: 26px 0;

  -webkit-animation: GradientAnimation 5s ease infinite;
  -moz-animation: GradientAnimation 5s ease infinite;
  animation: GradientAnimation 5s ease infinite;

  @-webkit-keyframes GradientAnimation {
    0%{background-position:0% 52%}
    50%{background-position:100% 49%}
    100%{background-position:0% 52%}
  }
  @-moz-keyframes GradientAnimation {
    0%{background-position:0% 52%}
    50%{background-position:100% 49%}
    100%{background-position:0% 52%}
  }
  @keyframes GradientAnimation {
    0%{background-position:0% 52%}
    50%{background-position:100% 49%}
    100%{background-position:0% 52%}
  }
`


const PricingSection = () => (
  <Section title='Pricing'>
    <Text>
        Please contact me via Instagram to find out about availability and pricing.
    </Text>
    <Centered>
      <CTA/>
    </Centered>
  </Section>
)

const LocationSection = () => (
  <Section title='Where I Walk'>
    <Image src={map}/>
  </Section>
)


const Home: NextPage = () => {
  return (
    <>
    <Head>
        <title>Sabrina - E&amp;C Dog Walker</title>
        <meta name="description" content="All my life I've been dog obsessed and I'm so grateful that I get to spend my working day with them." />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta property="og:title" content="Sabrina - E&amp;C Dog Walker" />
        <meta property="og:image" content="/sabs.jpg" />
      </Head>
    <Root>
      <Page>
    <TitleSection/>
    <AboutMeSection/>
    <LocationSection/>
    <PricingSection/>
    </Page>
    </Root>
    </>
  )
}

export default Home