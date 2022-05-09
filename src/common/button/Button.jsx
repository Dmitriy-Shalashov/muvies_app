import React from "react";
import classNames from "classnames";
import "./button.scss";
import PropTypes from "prop-types";

const Button = ({ onClick, size, outline, children }) => {
  return (
    <button
      className={classNames(
        "btn",
        { "btn-outline": outline },
        {
          small: size === "small",
          large: size === "large",
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  outline: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
