const closeModal = (contentRef, onClose) => {
  contentRef?.current?.parentNode.classList.remove("active");
  if (onClose) onClose();
};

export default closeModal;
