import styled from 'styled-components';
import ReviewsImage from '../../../public/images/undraw_reviews_lp8w.png';

export const InfoContainer = styled.div`
  color: #fff;
  margin-left: 3.25rem;
  padding: 160px 0;
  background-color: white;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;



export const TopLine = styled.div`
  color: #000;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const ImgWrapper = styled.div`
  background-image: url(${ReviewsImage});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 2rem;
  max-width: 555px;
  display: flex;
  justify-content: stretch;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  
  height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
`;