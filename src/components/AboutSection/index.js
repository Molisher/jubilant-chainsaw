import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  About,
  AboutDescription,
  AboutImage,
  AboutHide,
} from "./styles/AboutSection";

import { titleAnimation, fade, photoAnimation } from "./styles/animation";
import { Wave } from "../index";

import home from "../../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <AboutDescription>
        <div>
          <AboutHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </AboutHide>
          <AboutHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </AboutHide>
          <AboutHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </AboutHide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>
          <Link to="/molisher/contact">Contact Us</Link>
        </motion.button>
      </AboutDescription>
      <AboutImage>
        <motion.img variants={photoAnimation} src={home} alt="Home img" />
      </AboutImage>
      <Wave />
    </About>
  );
};

export default AboutSection;
