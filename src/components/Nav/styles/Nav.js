import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 100;
  h1 {
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    position: relative;
    padding-left: 10rem;
  }
  @media (max-width: 975px) {
    flex-direction: column;
    padding: 2rem 0rem;
    li {
      padding: 0;
    }
    ul {
      padding: 2rem 1rem 0rem 1rem;
      justify-content: space-around;
      width: 100%;
    }
  } ;
`;

export const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0;
  position: absolute;
  bottom: -50%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
