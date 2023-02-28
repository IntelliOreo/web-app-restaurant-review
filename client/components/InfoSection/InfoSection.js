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

