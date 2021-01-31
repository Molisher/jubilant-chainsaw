import React from "react";
import { AwardStyled } from "./styles/Award";

const Award = ({ title, description }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyled>
  );
};

export default Award;
