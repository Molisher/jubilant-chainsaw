import React from "react";
import { motion } from "framer-motion";

import { StyledContacts, Title, Hide, Circle, Social } from "./styles/Contacts";
import { titleAnimation } from "./styles/animation";

const Contacts = () => {
  return (
    <StyledContacts>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation} initial="hidden" animate="show">
            Get in touch.
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Social media</h2>
          </Social>
        </Hide>
      </div>
    </StyledContacts>
  );
};

export default Contacts;
