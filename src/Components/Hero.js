import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInNGrow = keyframes`
from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroWrapper = styled.div`
  background: url("http://res.cloudinary.com/bfrest/image/upload/e_blur:300,q_100/v1525544207/foxridge/DJI_0785.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  animation: ${fadeIn} linear 0.75s;

  h1 {
    font-size: 5em;
    text-shadow: 2px 2px 4px black;
    animation: ${fadeInNGrow} linear 0.5s;
  }

  @media (max-width: 850px) {
    h1 {
      font-size: 3.9em;
    }
  }

  @media (max-width: 450px) {
    height: 50vh;
    h1 {
      font-size: 2em;
    }
  }
`;

const Hero = () => {
  return (
    <div>
      <HeroWrapper>
        <h1 className="company-name">Foxridge Development</h1>
      </HeroWrapper>
    </div>
  );
};

export default Hero;
