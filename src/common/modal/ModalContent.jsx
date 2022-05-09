import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import closeModal from "./helpers/closeModal";
import handleOutsideClick from "./helpers/handleOutsideClick";

const ModalContent = ({ onClose, children }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.addEventListener("click", (event) =>
      handleOutsideClick(event, contentRef)
    );
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={contentRef} className="modal__content">
      {children}
      <div
        className="modal__content__close"
        onClick={() => closeModal(contentRef, onClose)}
      >
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element,
};

export default ModalContent;
