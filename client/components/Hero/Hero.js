import React, { useState, useEffect } from 'react';
import { 
  Section, 
  Content,
  Left,
  Title, 
  Desc,
  Button, 
} from './Hero.elements';

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Every Meal Has a Story <br /> Let Us Share Yours

          <Desc />
          <Button href="../../client/pages/SignUp.jsx" target='_blank'>
            <span>
              Get Started
            </span>
          </Button>

          </Title>           
        </Left>
      </Content>
    </Section>
  )
}

export default Hero;