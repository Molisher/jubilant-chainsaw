import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 3rem 0rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 975px) {
    padding: 2rem 0rem;
  }
`;

export const Movie = styled(motion.div)`
  padding-bottom: 5rem;
  :last-child {
    padding-bottom: 2rem;
  }
  h2 {
    margin: 0 8rem;
    text-align: center;
  }
  .line {
    margin-left: 8rem;
    margin-right: 8rem;
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

export const Frame2 = styled(Frame1)`
  background: #ff83fb;
`;

export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

export const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
