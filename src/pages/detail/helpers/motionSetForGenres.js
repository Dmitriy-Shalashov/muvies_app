const motionSetForGenres = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.7,
      duration: 1,
    },
  }),
  hidden: { opacity: 0 },
};

export default motionSetForGenres;
