import styled from 'styled-components';

export const CarouselContainer = styled.div `
  display: inline-block;
`
export const CarouselText = styled.div `
    text-align: left;
    display: inline-block;
    background-color: rgb(254, 255, 165, 0.5);
    position: absolute;
    z-index: 2;
    padding: 20px;
    line-height: 150%;
    font-size: 36px;
    font-family: Marker Felt, fantasy;
    transform: translateX(-600px);
`

export const CarouselDiv = styled.div `
  margin: auto;
  height: 900px;
  width: 1200px;
  padding-bottom: 30px;
  position: relative;
`

export const CarouselImg = styled.img `
  display: block;
  height: 900px;
  margin: auto;
  width: 1200px;
  object-fit: cover;
`