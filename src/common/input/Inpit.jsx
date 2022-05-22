import React from "react";
import classNames from "classnames";
import "./input.scss";
import PropTypes from "prop-types";

const Inpit = ({ type, placeholder, value, onChange, error }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
      className={classNames({ error: error })}
    />
  );
};

Inpit.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Inpit;
