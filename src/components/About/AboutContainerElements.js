import styled from 'styled-components';

export const AboutSection = styled.div `
  margin: 20px auto;
  height: 700px;
  width: 1000px;
  background-color: pink;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  padding: 50px;
  border-radius: 10px;
`

export const AboutImage = styled.img `
  display: inline-block;
`

export const AboutDescription = styled.div `
  display: inline-block;
  height: 600px;
  width: 400px;
  margin-left: 50px;
  padding: 20px;
  vertical-align: text-bottom;
`

export const AboutParagraph = styled.div `
  color: blue;
`