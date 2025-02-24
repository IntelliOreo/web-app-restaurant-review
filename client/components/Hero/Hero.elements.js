import styled from 'styled-components';
import HeroImage from '../../../public/images/hero-image.jpg';
import MobileImage from '../../../public/images/mobile-hero.jpg';
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
  
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%, linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%));
    z-index: 2;
  }
`


export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  background-image: url(${HeroImage});
  display: flex;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .85;

  /* @media screen and (max-width: 414px) {
    /* background-image: url(${MobileImage}); */
    /* width: 100%;
    background-position: center; */
  /* }; */
`


export const HeroContent = styled.div`
  z-index: 3;
  max-width:1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(2, 2, 2, .8);
  border-radius:  18px 18px 0 0;
  border: 20px solid rgb(2, 2, 2, .1);

  @media screen and (max-width: 414px) {
    margin-top: -25vh;
    padding: 4px 12px;

  }
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

`

export const HeroH2 = styled.h2`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
