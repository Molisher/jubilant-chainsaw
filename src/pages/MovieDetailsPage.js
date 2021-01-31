import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieState } from "../movieState";
import { MovieDetails } from "../components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetailsPage = () => {
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    const currentsMovie = movies.find((stateMovie) => {
      console.log(stateMovie.url + "////" + params.id);
      if (stateMovie.url === params.id) {
        return stateMovie;
      }
      return null;
    });
    setMovie(currentsMovie);
  }, [movies, params]);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {movie && (
        <MovieDetails
          title={movie.title}
          mainImg={movie.mainImg}
          awards={movie.awards}
          secondaryImg={movie.secondaryImg}
        />
      )}
    </motion.div>
  );
};

export default MovieDetailsPage;
