import React from "react";
import "./button.scss";
// import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props) => {
  return (
    <button
      className={`btn btn-outline ${props.className} `}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

// Button.PropTypes = {
//   onClick: PropTypes.func,
// };

export default Button;
