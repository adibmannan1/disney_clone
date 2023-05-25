import React from 'react'
import styled from 'styled-components'


function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://media.npr.org/assets/img/2018/06/12/bao-and-mom_wide-1f539b6b39eae4f53e74dbf8cf2edb5427fa37db.jpg" alt="" />
        </Background>
        <ImgTitle>
            <img src="https://familyroomllc.com/wp-content/uploads/2020/01/disney-white-logo.png" alt="" />
        </ImgTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-black.png" alt="play button icon" />
                <span>PLAY</span>
            </PlayButton>

            <TrailerButton>
                <img src="/images/play-white.png" alt="play button icon" />
                <span>TRAILER</span>
            </TrailerButton>

            <AddButton>
                <span>+</span>
            </AddButton>

            <GroupWatchButton>
                <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
        </Controls>
        <Subtitle>
            2018, Family, Fantasy
        </Subtitle>
        <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    margin-top: 70px;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 70px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImgTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-bottom: 15px;
    img{
        width: 55%;
        height: 55%;
        object-fit: contain;
        margin-top: 12%;
        margin-left: -20px;
        @media (max-width: 600px) {
            margin-top: 10%;
            margin-left: -20px;
        }
    }
    @media (max-width: 600px) {
        height: 50px;
        width: 50px;
        margin-left: 20px;
        margin-bottom: 10px;    
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 350px;
    @media (max-width: 600px) {
        margin-top: -50px;
    }
`
const PlayButton = styled.button`
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    height: 56px;
    background-color: white;
    padding: 0 24px;
    margin-right: 16px;
    margin-bottom: 16px;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover{
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        transform: scale(1.03);
    }
    img{
        width: 25px;
        margin-right: 5px;
    }
    transition: all 50ms ease-in;
`
const TrailerButton = styled(PlayButton)`
    border: 2px solid white;
    color: white;
    backdrop-filter: blur(10px);
    margin-right: 22px;
    background-color: rgba(0, 0, 0, 0.2);
    &:hover{
        background-color: transparent;
    }
`
const AddButton = styled.button`
    font-size: 35px;
    margin-right: 14px;
    border: 2px solid white;
    padding: 0;
    color: white;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    text-align: center;
    background-color: transparent;
    backdrop-filter: blur(10px);
    cursor: pointer;
    &:hover{
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        transform: scale(1.03);
    }
    transition: all 50ms ease-in;

`
const GroupWatchButton = styled(AddButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    &:hover{
        background-color: transparent;
    }
`
const Subtitle = styled.div`
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    min-height: 20px;
    margin-top: 30px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 18px;
    width: 50%;
    margin-top: 5px;
    @media (max-width: 600px) {
        width: 100%;
        font-size: 16px;
    }
`