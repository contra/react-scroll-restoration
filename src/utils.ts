export const scrollTo = (node = document.documentElement, scrollnumber = 0): number =>
  window.requestAnimationFrame(() => {
    node.scrollTo(0, scrollnumber);
  });

export const getScrollPage = (node = document.documentElement): number => {
  if (!node) return window.pageYOffset;
  return node.scrollTop;
};
