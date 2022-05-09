import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = ({ active, id, children }) => {
  const [param, setParam] = useState(false);

  useEffect(() => {
    setParam(active);
  }, [active]);

  return (
    <div
      id={id}
      className={classNames("modal", {
        active: param,
      })}
    >
      {children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;
