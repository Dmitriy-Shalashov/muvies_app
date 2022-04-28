import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = ({ active, id, children }) => {
  const [param, setParam] = useState(false);

  useEffect(() => {
    setParam(active);
  }, [active]);

  return (
    <div id={id} className={`modal ${param ? "active" : ""}`}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  param: PropTypes.bool,
  id: PropTypes.string,
};

export default Modal;
