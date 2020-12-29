import React from 'react';
import {
  Wrapper,
  Header,
  Card,
  Image,
  ImageContainer,
  Description
} from './OverviewElements.js'

const Overview = () => {
  return (
    <Wrapper>
      <Header>
        Every piece individually made by hand
      </Header>
      <div>
        <Card>
          <Description>
            Individual Cupcakes
          </Description>
          <ImageContainer>
            <Image src='Images/cupcake.jpg' alt='cupcake'/>
          </ImageContainer>
        </Card>
        <Card>
          <Description>
            Full-size Cakes
          </Description>
          <ImageContainer>
            <Image src='Images/cake.jpg' alt='cake'/>
          </ImageContainer>
        </Card>
      </div>
    </Wrapper>
  )
}

export default Overview;