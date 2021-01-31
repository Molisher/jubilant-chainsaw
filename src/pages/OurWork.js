import React from "react";
import { OurWork } from "../components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWorkPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <OurWork />
    </motion.div>
  );
};

export default OurWorkPage;
