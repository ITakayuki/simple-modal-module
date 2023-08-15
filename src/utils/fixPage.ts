const enableFixedPage = () => {
  const scrollVal = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollVal}px`;
}

const disableFixedPage = () => {
  const scrollVal = Number(document.body.style.top.replace("px", ""));
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, scrollVal);
}

export {enableFixedPage, disableFixedPage};