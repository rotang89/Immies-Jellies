import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const CarouselContainer = styled.div `
  display: inline-block;
  margin: 50px 0px;
  text-align: center;
`
export const CarouselText = styled.div `
  position: absolute;
  left: 0;
  right: 0;
  margin: 200px auto;
  width: 600px;
  text-align: center;
  display: inline-block;
  background-color: rgb(254, 255, 165, 0.5);
  z-index: 2;
  padding: 20px;
  line-height: 150%;
  font-size: 24px;
  font-family: Marker Felt, fantasy;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    position: relative;
    margin: 10px auto;
  }
`

export const CarouselDiv = styled.div `
  margin: auto;
  height: 800px;
  width: 100vw;
  padding-bottom: 30px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 1800px) {
    width: 1800px
  }
`

export const CarouselImg = styled.img `
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Text1 = styled.div `
  font-size: 36px;
  padding: 15px;
  border: 5px gray solid;
  grid-column: 1 / 4;
  border-bottom: 1px gray solid;
`

export const Text2 = styled.div `
  padding: 15px;
  border: 5px gray solid;
  border-right: 1px gray solid;
`

export const Text3 = styled.div `
  padding: 15px;
  border: 5px gray solid;
  border-left: 1px gray solid;
  border-right: 1px gray solid;
`

export const Text4 = styled(Link) `
  text-decoration: none;
  color: black;
  padding: 15px;
  border: 5px gray solid;
  border-left: 1px gray solid;
  cursor: pointer;
  transition: background-color, 500ms;
  &:hover {
    background-color: gray;
    color: white;
  }
`