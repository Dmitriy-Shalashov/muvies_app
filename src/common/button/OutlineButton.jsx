import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

const OutlineButton = ({ onClick, className, children }) => {
  return (
    <button
      className={`btn btn-outline ${className} `}
      onClick={onClick ? () => onClick() : null}
    >
      {children}
    </button>
  );
};

OutlineButton.propTypes = {
  onClick: PropTypes.func,
};

export default OutlineButton;
