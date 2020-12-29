import styled from 'styled-components';

export const Wrapper = styled.div `
  padding: 10px;
  margin: 0 auto 50px auto;
`

export const Header = styled.div `
  font-size: 30px;
`

export const Card = styled.div `
  display: inline-block;
  margin: 10px 30px;
  padding: 20px;
  vertical-align: text-bottom;
`

export const Image = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform, 500ms;
  &:hover {
    transform: scale(1.5)
  }
`

export const ImageContainer = styled.div `
  overflow: hidden;
  width: 400px;
  height: 400px;
  border-radius: 20px;
`

export const Description = styled.div `
  margin: 10px;
  font-size: 20px;
`