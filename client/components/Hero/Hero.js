import React, { useState, useEffect } from 'react';
import { 
  Section, 
  Content,
  Container,
  Left,
  MainHeading, 
  SubTitle,
  Desc,
  Button, 
} from './Hero.elements';
import '../../styles/globalStyles.js';

const Hero = () => {
  return (  
    <Section>
      <Content >
        <Container >
          <Left >
            <MainHeading>
              There's A Story In<br />Every Meal
            </MainHeading>
            <SubTitle>
              So what are you waiting for?
            </SubTitle>
            <Desc />
            <Button href="../../client/pages/SignUp.jsx" target='_blank'>           
                Share Yours
            </Button>
          </Left>
        </Container>
      </Content>
    </Section>
  )
}

export default Hero;