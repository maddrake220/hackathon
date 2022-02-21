export const getNewFontSize = (fontsize, fn, range) => {
  let newFontSize;
  if (fn === "plus") {
    newFontSize = Number(fontsize.slice(0, 2)) + range;
  } else {
    newFontSize = Number(fontsize.slice(0, 2)) - range;
  }
  newFontSize = newFontSize + "px";
  return newFontSize;
};
