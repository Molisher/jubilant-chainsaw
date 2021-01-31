import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const StyledContacts = styled(motion.div)`
  padding: 3rem 8rem;
  color: #353535;
  min-height: 89vh;
  @media (max-width: 975px) {
    padding: 2rem 2rem;
  }
`;

export const Title = styled.div`
  margin-bottom: 2rem;
  color: black;
  @media (max-width: 350px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
export const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
  @media (max-width: 650px) {
    width: 2rem;
    height: 2rem;
  }
`;
export const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    font-size: 3rem;
    margin: 2rem;
  }
  @media (max-width: 610px) {
    h2 {
      font-size: 2.5rem;
      margin: 1rem;
    }
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 1.8rem;
    }
  }
  }
`;
