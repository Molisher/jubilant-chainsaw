import React from "react";
import { Details, Headline, Awards, Pane } from "./styles/MovieDetails";
import { Award } from "../../components";

const MovieDetails = ({ title, mainImg, awards, secondaryImg }) => {
  return (
    <Details>
      <Headline>
        <h2>{title}</h2>
        <img src={mainImg} alt={`${title} main poster `} />
      </Headline>
      <Awards>
        {awards.map((award) => (
          <Award
            title={award.title}
            description={award.description}
            key={award.title}
          />
        ))}
      </Awards>
      <Pane>
        <img src={secondaryImg} alt={`${title} secondary poster`} />
      </Pane>
    </Details>
  );
};

export default MovieDetails;
