import React from "react";
import { useNavigate } from "react-router-dom";

import Svg from "./Svg";
import OutlineButton from "../../common/button/OutlineButton";
import "./notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <div className="container">
        <div className="svg-section">
          <Svg />
          <OutlineButton onClick={goBack} className="svg-section__btn">
            Go back
          </OutlineButton>
        </div>
      </div>
    </>
  );
};

export default NotFound;
