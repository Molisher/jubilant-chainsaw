import React from "react";
import { motion } from "framer-motion";

import { Contacts } from "../components";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Contacts />
    </motion.div>
  );
};

export default ContactUs;
