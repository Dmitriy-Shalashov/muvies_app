import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick ? () => onClick() : null}
    >
      {children}
    </button>
  );
};

// export const OutlineButton = ({ onClick, className, children }) => {
//   return (
//     <button
//       className={`btn btn-outline ${className} `}
//       onClick={onClick ? () => onClick() : null}
//     >
//       {children}
//     </button>
//   );
// };

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
