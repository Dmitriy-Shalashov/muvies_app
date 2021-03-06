import React, { useRef } from "react";
import PropTypes from "prop-types";

import Modal from "../../common/modal/Modal";
import ModalContent from "../../common/modal/ModalContent";

const TrailerModal = ({ item }) => {
  const iframeRef = useRef(null);
  const onClose = () => {
    iframeRef.current?.setAttribute("src", "");
  };

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

TrailerModal.propTypes = {
  item: PropTypes.object,
};

export default TrailerModal;
