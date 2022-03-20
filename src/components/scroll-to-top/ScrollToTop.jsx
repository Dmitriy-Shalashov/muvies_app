import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import "./scrollToTop.scss";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    pageYOffset > 700 ? setVisible(true) : setVisible(false);
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <>
      <li onClick={scrollToTop}>
        <i className="bx bx-chevrons-up bx-md  bx-fade-up"></i>
      </li>
    </>
  );
};

export default ScrollToTop;
