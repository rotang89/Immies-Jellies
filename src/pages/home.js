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
        <h1 style={{fontFamily: 'Chalkduster'}}>Fresh Coconut Jelly Desserts</h1>
        <h1 style={{fontFamily: 'Chalkduster'}}>Made to order cupcakes and cakes</h1>
        </Intro>
      < Home_Carousel />
    </div>
  )
}

export default Home;