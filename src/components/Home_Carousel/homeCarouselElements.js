import styled from 'styled-components';

export const CarouselContainer = styled.div `
  display: inline-block;
  margin: 50px 0px;
  text-align: center;
`
export const CarouselText = styled.div `
  margin: 200px auto;
  width: 50%;
  text-align: center;
  display: inline-block;
  background-color: rgb(254, 255, 165, 0.5);
  position: absolute;
  z-index: 2;
  padding: 20px;
  line-height: 150%;
  font-size: 36px;
  font-family: Marker Felt, fantasy;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
1
`

export const CarouselDiv = styled.div `
  margin: auto;
  height: 800px;
  width: 100vw;
  padding-bottom: 30px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 750px) {
    width: 100vw
  }
`

export const CarouselImg = styled.img `
  display: block;
  margin: auto;
  width: 100%;
  height: 62vw;
  object-fit: cover;
`

export const Text1 = styled.div `
  border: 5px black solid;
  border-right: 1px black solid;
`

export const Text2 = styled.div `
  border: 5px black solid;
  border-left: 1px black solid;
`