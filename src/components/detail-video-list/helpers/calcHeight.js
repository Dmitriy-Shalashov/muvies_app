const calcHeight = (iframeRef) => {
  const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
  iframeRef.current.setAttribute("height", height);
};

export default calcHeight;
