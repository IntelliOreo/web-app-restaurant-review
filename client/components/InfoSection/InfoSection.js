import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button } from '../../styles/globalStyles';
import {
  InfoContainer,
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
  const navigate = useNavigate();

    function handleSignInClick() {
      navigate('/signIn');
    }

  return (
    <>
      <InfoContainer >
        <Container>
          <InfoRow >
            <InfoColumn>
              <TextWrapper>
                <TopLine>Social Media for Foodies</TopLine>
                <Heading>Create.<br />Connect.<br/>Critique.</Heading>
                <Subtitle>Tell us about your favorite experiences.</Subtitle>
                <Link to='/signIn'>
                  <Button onClick={handleSignInClick}>
                    Get Started Today!
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
      </InfoContainer>
    </>
  );
};

