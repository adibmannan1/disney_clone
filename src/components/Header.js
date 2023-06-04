import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"

import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut
} from "../features/user/userSlice"
import {useDispatch, useSelector} from "react-redux"

function Header() {
  const [open, setOpen] = useState(false)
  let menuRef = useRef()
  useEffect(()=>{
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return()=>{
      document.removeEventListener("mousedown", handler)
    }
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  
  useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
      if(user){
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
      }
    })
  }, [])

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result)=>{
      console.log(result)
      let user = result.user
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      },
      ))
      navigate("/")
    })
  };

  const logOut= () => {
    signOut(auth).then(()=>{
      dispatch(setSignOut())
      navigate("/login")
    })
  };
  // {userPhoto && userPhoto?
  //   console.log(userPhoto): console.log("hello")
  // }
  return (
    <Nav className='nav'>
      <Logo src="/images/logo.svg"/>
      {!userName?
        <>
        <NavMenu>
          <a href="">
            <img src="/images/home-icon.svg" alt="" className='menuIcon'/>
            <span >HOME</span>
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
        <LoginContainer>
          <LogIn onClick={signInWithGoogle}>Log In</LogIn>
        </LoginContainer>
        </>
           : 
        <>
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
            <div className='menu-container' ref={menuRef}>
              <div className="menu-trigger" onClick={()=>{setOpen(!open)}}> 
                {userPhoto && <UserImg className='img' src={userPhoto}/>}
              </div>
            
              <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                <h3>{userName && userName}<br/><span>User</span></h3>
                <p className='logOut' text={"Log Out"} onClick={logOut}>LOG OUT </p>
                <ul>
                  <DropDownItem text={"Home"}/>
                  <DropDownItem text={"Search"}/>
                  <DropDownItem text={"WatchList"}/>
                  <DropDownItem text={"Originals"}/>
                  <DropDownItem text={"Movies"}/>
                  <DropDownItem text={"Series"}/>
                </ul>
              </div>
          </div>
        </>
      }  
    </Nav>
  )
}

function DropDownItem({text}){
  return(
    <li className='dropdownItem'>
      <a>{text}</a>
    </li>
  )
}
export default Header

const Nav = styled.nav`
  position: relative;
  height: 70px;
  background: transparent;
  backdrop-filter: blur(50px);
  display: flex;
  align-items: center;
  padding: 0 36px;
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
  @media (max-width: 600px) {
    display: none;
  }
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

`
const LoginContainer = styled.div`

`
const LogIn = styled.div`
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover{
    border: 2px solid rgb(28, 231, 131);
    background-color: rgb(28, 231, 131);
  }
`