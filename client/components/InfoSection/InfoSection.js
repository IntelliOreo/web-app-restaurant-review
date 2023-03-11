// import React from 'react'
// import {
//   InfoContainer,
//   InfoWrapper,
//   InfoRow,
//   Column1,
//   Column2,
//   TextWrapper,
//   TopLine,
//   Heading,
//   Subtitle,
//   BtnWrap,
//   ImgWrap,
//   Img,
// } from './InfoSection.elements';

// import { Button } from '../Button/Button.elements';

// export default function InfoSection (lightBg, id, imgStart, lightText, darkText, topLine, headline, description, buttonLabel, img) {
//   return (
//     <>
//       <InfoContainer lightBg={lightBg} id={id}>
//         <InfoWrapper>
//           <InfoRow imgStart={imgStart}>
//             <Column1>
//               <TextWrapper>
//                 <TopLine>{topLine}</TopLine>
//                 <Heading lightText={lightText}>{headline}</Heading>
//                 <Subtitle darkText={darkText}>{description}</Subtitle>
//                 <BtnWrap>
//                   <Button to="#">{buttonLabel}</Button>
//                 </BtnWrap>
//               </TextWrapper>
//             </Column1>
//             <Column2>
//               <ImgWrap>
//                 <Img src={img} alt='img' />
//               </ImgWrap>
//             </Column2>
//           </InfoRow>
//         </InfoWrapper>
//       </InfoContainer>
//     </>
//   )
// };





import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../styles/globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

export default function InfoSection() {
  return (
    <>
      <InfoSec >
        <Container>
          <InfoRow >
            <InfoColumn>
              <TextWrapper>
                <TopLine>Social Media for Foodies</TopLine>
                <Heading>Create.<br />Connect.<br/>Critique.</Heading>
                <Subtitle>Tell us about your favorite experiences.</Subtitle>
                <Link to='/sign-up'>
                  <Button >
                    
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper >
                <Img />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

