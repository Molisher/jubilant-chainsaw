import styled from "styled-components/macro";

export const Details = styled.div`
  color: white;
`;

export const Headline = styled.div`
  min-height: 80vh;
  padding-top: 25vh;
  position: relative;
  h2 {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -5%);
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 550px) {
    padding-top: 15vh;
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const Awards = styled.div`
  min-height: 50vh;
  display: flex;
  margin: 2rem 8rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 550px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

export const Pane = styled.div`
  min-height: 70vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`;
