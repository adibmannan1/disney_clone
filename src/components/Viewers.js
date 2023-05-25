import React from 'react'
import styled from 'styled-components';


function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" alt="disney" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" alt="disney" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" alt="disney" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" alt="disney" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" alt="disney" />
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.main`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding: 30px 0px 26px 0px;
    @media (max-width: 600px) {
        grid-gap: 20px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        padding: 15px 0px;
    }  
`
const Wrap = styled.main`
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    @media (max-width: 600px) {
        box-shadow: rgb(0 0 0 / 49%) 0px 23px 25px -10px,
                    rgb(0 0 0 / 53%) 0px 13px 5px -10px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

    }
`