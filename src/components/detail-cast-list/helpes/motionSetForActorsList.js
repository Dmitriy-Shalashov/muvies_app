const motionSetForActorsList = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.4,
    },
  }),
  hidden: { opacity: 0, x: 500 },
};

export default motionSetForActorsList;
