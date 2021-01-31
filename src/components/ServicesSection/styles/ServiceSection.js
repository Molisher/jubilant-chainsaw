import styled from "styled-components/macro";

import {
  About,
  AboutImage,
  AboutDescription,
} from "../../AboutSection/styles/AboutSection";

export const Services = styled(About)`
  align-items: center;
  flex-direction: row-reverse;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 975px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const ServicesDescription = styled(AboutDescription)`
  padding-right: 0;
  padding-left: 5rem;
  @media (max-width: 975px) {
    padding: 0;
  }
`;

export const ServicesImage = styled(AboutImage)``;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 400px) {
    display: block;
  }
`;

export const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      color: black;
      background: white;
      padding: 1rem;
    }
  }
  @media (max-width: 770px) {
    flex-basis: 35%;
    p {
      width: 80%;
    }
    :nth-child(2n) {
      padding-left: 8%;
    }
  }
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    :nth-child(2n) {
      padding-left: 0;
    }
  }
`;
