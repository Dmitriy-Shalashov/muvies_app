import React from "react";
import { useNavigate } from "react-router-dom";

import Svg from "./Svg";
import Button from "../../common/button/Button";
import "./notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <div className="container">
        <div className="svg-section">
          <Svg />
          <div className="svg-section__btn">
            <Button onClick={goBack}>Go back</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
