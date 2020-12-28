/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Home_Carousel from '../components/Home_Carousel/home_carousel.js'
import styled from 'styled-components';

const Intro = styled.div `
  margin: 20px auto;
`

const Home = () => {
  return (
    <div>
      <Intro>
        </Intro>
      < Home_Carousel />
    </div>
  )
}

export default Home;