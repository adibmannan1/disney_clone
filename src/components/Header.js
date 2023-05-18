import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        
        <NavMenu>
          <a href="">
            <img src="/images/home-icon.svg" alt="" className='menuIcon'/>
            <span>HOME</span>
          </a>
          <a href="">
            <img src="/images/search-icon.svg" alt="" className='menuIcon'/>
            <span>SEARCH</span>
          </a>
          <a href="">
            <img src="/images/watchlist-icon.svg" alt="" className='menuIcon'/>
            <span>WATCHLIST</span>
          </a>
          <a href="">
            <img src="/images/original-icon.svg" alt="" className='menuIcon'/>
            <span>ORIGINALS</span>
          </a>
          <a href="">
            <img src="/images/movie-icon.svg" alt="" className='menuIcon'/>
            <span>MOVIES</span>
          </a>
          <a href="">
            <img src="/images/series-icon.svg" alt="" className='menuIcon'/>
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: transparent;
  backdrop-filter: blur(50px);
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
`
const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`
const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
      height: 25px;
      margin: 0 7px;
    }

    span{
      letter-spacing: 2px;
      position: relative;
      &:after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        border-radius: 5px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
      }
    }
    &:hover{
      span:after{
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 30px -7px #41bcff;
  transition: all 0.1s ease-in-out;
  &:hover{
    box-shadow: 0px 0px 35px -5px #41bcff;
  }
`