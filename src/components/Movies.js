import React from 'react'
import styled from 'styled-components'


function Movies() {
  return (
    <Container>
        <h4>For You</h4>
        <Content>
          <Wrap>
            <img src="https://wallpapers.com/images/hd/elsa-and-anna-movie-poster-54jqm799ygx1y4o1.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="https://wallpapers.com/images/hd/elsa-and-anna-movie-poster-54jqm799ygx1y4o1.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="https://wallpapers.com/images/hd/elsa-and-anna-movie-poster-54jqm799ygx1y4o1.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="https://wallpapers.com/images/hd/elsa-and-anna-movie-poster-54jqm799ygx1y4o1.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="https://wallpapers.com/images/hd/elsa-and-anna-movie-poster-54jqm799ygx1y4o1.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="https://wallpapers.com/images/hd/elsa-and-anna-movie-poster-54jqm799ygx1y4o1.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="https://wallpapers.com/images/hd/elsa-and-anna-movie-poster-54jqm799ygx1y4o1.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="https://wallpapers.com/images/hd/elsa-and-anna-movie-poster-54jqm799ygx1y4o1.jpg" alt="" />
          </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
  h4{
    margin: 15px 45px;
  }
`
const Content = styled.div`
  margin: 20px 45px;
  display: grid;
  padding-bottom: 40px;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
  cursor: pointer;
  transition: all 220ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba( 249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  &:hover{
    transform: scale(1.05);
    border-color: rgba( 249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                rgb(0 0 0 / 72%) 0px 30px 20px -10px;
  }
`