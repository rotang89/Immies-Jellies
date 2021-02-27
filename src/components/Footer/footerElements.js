import styled from 'styled-components';

export const Icon = styled.a `
  margin: 20px;
  display: inline-block;
  transition: transform 250ms;
  &:hover {
    transform: translateY(-3px);
  }
`

export const SocialContainer = styled.div `
  display: inline-block;
  width: 400px;
  padding-left: 100px;
  vertical-align: text-top;
  @media screen and (max-width: 900px) {
    display: block;
    padding: 0px;
    margin: 0px
  }
`

export const ContactContainer = styled.div `
  display: inline-block;
  width: 400px;
  padding-right: 100px;
  vertical-align: text-top;
  border-right: 1px black dashed;
  @media screen and (max-width: 900px) {
    display: block;
    border: none;
    padding: 0px;
  }
`

export const ContactInfo = styled.div `
  font-size: 16px;
  margin: 8px auto;
`

export const Wrapper = styled.div `
  background-color: rgb(128, 128, 128, 0.8);
  padding: 30px;
`