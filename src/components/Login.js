import React from 'react'
import { styled } from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="\images\cta-logo-one.svg"/>
        <SignUp>Buy Premium Subscription</SignUp>
        <Description>
          Introducing our Premium membership, your passport to cinematic bliss! Gain unlimited access to a vast collection of movies spanning genres, eras, and languages. Enjoy seamless HD streaming, exclusive early releases, personalized recommendations, and curated playlists. 
        </Description>
        <CTALogoTwo src="\images\cta-logo-two.png"/>
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  &:before{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.9;
    filter: blur(2px);
  }
`
const CTA = styled.div`
  max-width: 650px;
  padding: 0 40px;
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-top: 17vh;
`
const CTALogoOne = styled.img`

`
const CTALogoTwo = styled.img`
  margin-top: 20px;
`
const SignUp = styled.a`
  margin-top: 15px;
  margin-bottom: 15px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #1ce783;
  width: 100%;
  font-weight: bold;
  font-size: clamp(0.75rem, 0rem + 2vw, 1.25rem);
  letter-spacing: 2px;
  padding: 17px 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #026734;
  transition: all 70ms ease-in;

  &:hover{
    background-color: #026734;
    color: #1ce783;
  }
  &:active{
    background-color: #014b26;
  }
`
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`