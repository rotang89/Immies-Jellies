import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import {
  CarouselContainer,
  CarouselText,
  CarouselDiv,
  CarouselImg,
  Text1,
  Text2,
  Text3,
  Text4
} from './homeCarouselElements.js';

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
      <CarouselText>
        <Text1>
          100% <span style={{fontFamily:'Apple Chancery, cursive'}}>NATURAL</span>
          <br></br>
          COCONUT JELLY DESSERTS
        </Text1>
        <Text2>
          HOMEMADE
        </Text2>
        <Text3>
          MADE TO ORDER
        </Text3>
        <Text4 to='/menu'>
          Check out our menu 🛒
        </Text4>
      </CarouselText>
      <CarouselDiv>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1000}
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
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <CarouselImg
            src="Images/carousel/image1.jpg"
            alt='dessert'
          />
          <CarouselImg
            src="Images/carousel/image2.jpg"
            alt='dessert'
            />
          <CarouselImg
            src="Images/carousel/image3.jpg"
            alt='dessert'
            />
          <CarouselImg
            src="Images/carousel/image4.jpg"
            alt='dessert'
          />
          <CarouselImg
            src="Images/carousel/image5.jpg"
            alt='dessert'
            />
          <CarouselImg
            src="Images/carousel/image6.jpg"
            alt='dessert'
            />
          </Carousel>
        </CarouselDiv>
      </CarouselContainer>
  )
}

export default Home_Carousel;