import closeModal from "./closeModal";

const handleOutsideClick = (event, contentRef) => {
  if (!event.path.includes(contentRef.current)) {
    closeModal(contentRef);
  }
};
export default handleOutsideClick;
