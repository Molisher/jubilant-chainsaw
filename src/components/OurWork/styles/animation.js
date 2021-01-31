export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duraiton: 0.75,
    },
  },
};

export const photoAnimation = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const lineAnimation = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: { duraiton: 0.75 },
  },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};
