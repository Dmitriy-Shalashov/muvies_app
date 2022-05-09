import React from "react";
import PropTypes from "prop-types";
import "./pageHeader.scss";
import background from "../../assets/footer-bg.jpg";

const PageHeader = ({ children }) => {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2>{children}</h2>
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.element,
};

export default PageHeader;
