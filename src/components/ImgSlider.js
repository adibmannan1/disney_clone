import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import requests from '../Requests'
import axios from 'axios'

function ImgSlider() {
    
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random()*movies.length)]
    useEffect(()=>{
        axios.get(requests.requestTopRated).then((response)=>{
        setMovies(response.data.results)
        })
    }, [])
    
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={`https://image.tmdb.org/t/p/original/${movies[10]?.backdrop_path}`} alt={movies?.title}
                style={{objectPosition: "top" + "20%"}}/>
            </Wrap>
            <Wrap>
                <img src={`https://image.tmdb.org/t/p/original/${movies[8]?.backdrop_path}`} alt={movies?.title}
                style={{objectPosition: "top" + "20%"}} />
            </Wrap>
            <Wrap>
                <img src={`https://image.tmdb.org/t/p/original/${movies[9]?.backdrop_path}`} alt={movies?.title} 
                style={{objectPosition: "top" + "10%"}}/>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin: 20px 40px 0 40px;
    ul li button{
        &:before{
            font-size: 8px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before{
        color: white;
    }
    .slick-list{
        overflow: visible;
    }
    button{
        z-index: 1;
    }
    .slick-slide > div {
        margin: 0 10px;
      }
    .slick-list {
    margin: 0 -10px;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 4px solid transparent;
        border-radius: 10px;
        width: 100%;
        object-fit: cover;
        max-height: 52vh;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 200ms ease-in;
        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8 );
        }
    }

`