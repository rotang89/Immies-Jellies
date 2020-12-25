import styled from 'styled-components';

export const ContactWrapper = styled.div `
  margin: 20px auto;
  height: 700px;
  width: 1000px;
  background-color: pink;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  padding: 50px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr;
`

export const Title = styled.div `
  grid-column: 1 / 3;
`

export const Message = styled.div `
  margin: 20px;
  font-size: 24px;
`

export const Image = styled.img `
  justify-self: center;
`

export const ContactForm = styled.form `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 3fr .5fr;
`

export const ContactInput = styled.p `
  grid-column: 1 / 3;
  text-align: left;
`

export const InfoForm = styled.input `
  width: 100%;
  font-size: 16px;
  padding: 4px;
  margin-bottom: 10px;
  text-align: left;
`

export const MessageForm = styled.textarea `
  width: 100%;
  height: 80%;
  text-align: left;
  font-size: 16px;
  padding: 4px;
`

export const ContactButton = styled.button `
  width: 100%;
  margin-left: 10px;
  box-shadow:inset 0px 1px 0px 0px #d9fbbe;
	background:linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
	background-color:#b8e356;
	border-radius:6px;
	border:1px solid #83c41a;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #86ae47;
  &.hover {
    background:linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
	  background-color:#a5cc52;
  };
  &.active {
    position:relative;
	  top:1px;
  }
`