import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../../public/images/hero-image.jpg'

const Section = styled.section`
  background-image: url(${HeroImage});
  height: 785px;
  Display: block;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .85;
  
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
  padding-left: 80px;
`;

const Left = styled.div`
  paddding-left: 220px;
  padding-top: 200px;
`;

const Title = styled.p`
  font-size: 70px;
  color: #fff;
  font-weight: 600;
  

`;


const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;

const Button = styled.a`
  diplay: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 30px;
  padding: 15px 20px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177/ 12%); 
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Every Meal Has a Story <br /> Let Us Share Yours

          <Desc />
          <Button href="" target='_blank'>
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

export default Hero