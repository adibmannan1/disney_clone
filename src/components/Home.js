import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Row from './Row'
import requests from '../Requests'

function Home() {
    
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Row title="Popular" fetchURL={requests.requestPopular}/>
      <Row title="Top Rated" fetchURL={requests.requestTopRated}/>
      <Row title="Trending" fetchURL={requests.requestTrending}/>
      <Row title="Upcoming" fetchURL={requests.requestUpcoming}/>
    </Container>
  )
}

export default Home

const Container = styled.main`
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  &:before{
    background: url('/images/home-background.png') center center / cover fixed;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1500px;
    @media (max-width: 600px) {
      height: 100vh;
    }
  }
`