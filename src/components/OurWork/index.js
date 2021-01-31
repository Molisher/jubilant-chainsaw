import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useScroll } from "../../hooks/useScroll";

import athlete from "../../img/athlete-small.png";
import racer from "../../img/theracer-small.png";
import goodtimes from "../../img/goodtimes-small.png";

import {
  photoAnimation,
  fade,
  lineAnimation,
  slider,
  sliderContainer,
} from "./styles/animation";

import {
  Work,
  Movie,
  Hide,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
} from "./styles/OurWork";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={athlete}
              alt="Athlete movie poster"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={racer}
              alt="Racer movie poster"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt="Good Times movie poster"
            />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

export default OurWork;
