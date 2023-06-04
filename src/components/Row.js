import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Row({title, fetchURL}) {
  const [movies, setMovies] = useState([])
  const [like, setLike] = useState(false)
  // limit the number of movies to 8
  const limitedMovies = movies.slice(0, 8);
  // console.log(limitedMovies)

  useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
      setMovies(response.data.results)
    })
  }, [fetchURL])

  // function for hiding long titles
  const truncateString = (str, num) =>{
    if(str?.length>num){
      return str.slice(0, num) + '...'
    }else return str
  }

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
          {limitedMovies.map((item, id) => {
            return (
              <Wrap key={id}>
                <div>
                  <p>{item?.release_date}</p>
                  <h1>{truncateString(item?.title, 15)}</h1>
                </div>
                <Link to={`/detail/${item.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  )
}

export default Row

const Container = styled.div`
  h4{
    margin: 20px 0px;
  }
  margin-top: 10px;
`
const Content = styled.div`
  margin: 20px 0px;
  display: grid;
  padding-bottom: 40px;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Wrap = styled.div`
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba( 249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }

  div{
    position: absolute;
    bottom: 5%;
    left: 5%;
    z-index: 1;
  }
  h1, p{
    font-size: clamp(0.75rem, 0rem + 2vw, 1.25rem);
    visibility: hidden;
    opacity: 0;
    transition: opacity 250ms ease-in-out, visibility 250ms ease-in-out;
    @media (max-width: 800px) {
      visibility: visible;
      opacity: 1;
    }
  }
  p{
    bottom: 25%;
    left: 5%;
    opacity: 0.5;
    font-size: clamp(0.4375rem, 0.1563rem + 0.75vw, 0.625rem);
  }
  &:hover{
    transform: scale(1.05);
    border-color: rgba( 249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 20px -10px;
    img{
      filter: brightness(50%);
    }
    h1, p{
      visibility: visible;
      opacity: 1;
    }
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`




