import React, { useState } from 'react'
import { Button } from '../Button/Button.elements';
import { Link } from 'react-router-dom';
import SignIn from '../../pages/SignIn/SignIn.js';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,

} from './Hero.elements';

export default function Hero() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }



  return (
    <HeroContainer >
      <HeroBg />
      <HeroContent>
        <HeroH1>Every Meal Tells A Story</HeroH1>
        <HeroH2>So what are you waiting for?</HeroH2>
        <HeroBtnWrapper>
          <Link id='sign-in-path' >
            <Button 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            >
              Share Yours {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
};



//old hero section
// import React, { useState, useEffect } from 'react';
// import { 
//   Section, 
//   Content,
//   Container,
//   Left,
//   MainHeading, 
//   SubTitle,
//   Desc,
//   Button, 
// } from './Hero.elements';
// import '../../styles/globalStyles.js';

// const Hero = () => {
//   return (  
//     <Section>
//       <Content >
//         <Container >
//           <Left >
//             <MainHeading>
//               There's A Story In<br />Every Meal
//             </MainHeading>
//             <SubTitle>
//               So what are you waiting for?
//             </SubTitle>
//             <Desc />
//             <Button href="../../client/pages/SignUp.jsx" target='_blank'>           
//                 Share Yours
//             </Button>
//           </Left>
//         </Container>
//       </Content>
//     </Section>
//   )
// }

// export default Hero;