import styled from 'styled-components';

export const FooterContainer = styled.div `
  background-color: rgb(128, 128, 128, 0.8);
  padding: 30px
`

export const FlagBorder = styled.img `
  margin: 50px 0px;
`

export const Icon = styled.a `
  margin: 20px;
  display: inline-block;
  transition: transform 250ms;
  &:hover {
    transform: translateY(-3px);
  }
`

