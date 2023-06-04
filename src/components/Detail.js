import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Detail() {
    // random number generator
    let randomNum = (length) => {
        return Math.floor((Math.random() * length))
    }

    const {id} = useParams()
    const [movieData, setMovieData] = useState();
    const [imageData, setImageData] = useState();
    // console.log(movieData)
    console.log(imageData)
  
    useEffect(() => {
      const fetchData = async () => {
        const API_KEY = 'a977ce91ad94ca52c7334d8d192f0de5';
        const BASE_URL = `https://api.themoviedb.org/3/movie/${id}`;
        const endpoint = `${BASE_URL}?api_key=${API_KEY}`;
  
        const response = await axios.get(endpoint);
        setMovieData(response.data);
      };
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTc3Y2U5MWFkOTRjYTUyYzczMzRkOGQxOTJmMGRlNSIsInN1YiI6IjY0NmIzMTUzZDE4NTcyMDEyMDgxZGExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zly1iDwZkX0c_wbm-VcMAHSR4S59QIA0T48hsj6Qyz4'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options)
        .then(response => response.json())
        .then(response => setImageData(response))
        .catch(err => console.error(err));
  
      fetchData();
    }, []);

  

  return ( 
    <Container>
        <Background>
            <img
                src={`https://image.tmdb.org/t/p/w500${imageData?.backdrops[randomNum(imageData?.backdrops.length)].file_path}`}
            />
        </Background>
        <Wrap>
            <Logo src={`https://image.tmdb.org/t/p/w500${imageData?.logos[randomNum(imageData?.logos.length)].file_path}`}/>

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
            <Description>
                <p>{movieData?.tagline}</p>
            </Description>
            <Subtitle>
                {movieData?.overview}
            </Subtitle>
        </Wrap>
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
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Logo = styled.img`
    max-width: 300px;
    max-height: 200px;
    margin: 10vh 0 10vh 0;
`
const ImgTitle = styled.div`
    height: 10vh;
    width: 15vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 105px;
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
        font-size: 12px;
        margin-left: 10px;
        margin-bottom: 10px;    
        margin-top: 20px;
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
    margin-top: 10px;
    width: 50%;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 18px;
    width: 50%;
    margin-top: 35px;
    @media (max-width: 600px) {
        width: 100%;
        font-size: 16px;
        margin-top: 40px;
    }
`