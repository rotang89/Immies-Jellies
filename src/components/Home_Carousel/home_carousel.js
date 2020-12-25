import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import { CarouselContainer } from './homeCarouselElements.js';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1
  }
};

const Home_Carousel = () => {
  return (
    <CarouselContainer>
      <div
      style={{
        margin: 'auto',
        width: '900px',
        paddingBottom: '30px',
        position: 'relative'
      }}
      >

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={responsive}
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img
            src="Images/carousel/dessert.jpg"
            alt='dessert'
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src="Images/carousel/dessert.jpg"
            alt='dessert'
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
            />
          <img
            src="Images/carousel/dessert.jpg"
            alt='dessert'
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
            />
          <img
            src="Images/carousel/dessert.jpg"
            alt='dessert'
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
          />
          <img
            src="Images/carousel/dessert.jpg"
            alt='dessert'
            style={{
              display: 'block',
              height: '100%',
              margin: 'auto',
              width: '100%'
            }}
            />
          </Carousel>
        </div>
      </CarouselContainer>
  )
}

export default Home_Carousel;