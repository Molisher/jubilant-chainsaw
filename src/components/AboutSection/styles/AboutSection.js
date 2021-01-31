import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 8rem;
  color: white;
  @media (max-width: 975px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const AboutDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 975px) {
    padding: 0;
    button {
      margin: 1rem 0rem 3rem 0rem;
    }
  }
`;

export const AboutImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const AboutHide = styled.div`
  overflow: hidden;
`;
