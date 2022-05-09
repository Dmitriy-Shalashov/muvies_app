import React from "react";
import "./input.scss";
import PropTypes from "prop-types";

const Inpit = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
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
