const shrinkHeader = (headerRef) => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    headerRef.current.classList.add("shrink");
  } else {
    headerRef.current.classList.remove("shrink");
  }
};

export default shrinkHeader;
