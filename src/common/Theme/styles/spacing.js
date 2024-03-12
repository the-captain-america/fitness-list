const siteBasefontSize = 16;

const asRem = (fontSize) => `${parseFloat(fontSize) / siteBasefontSize}rem`;

const asEm = (fontSize, baseSize = siteBasefontSize) =>
  `${parseFloat(fontSize) / parseFloat(baseSize)}em`;

const getSpacing = (level) => level * 16;

export { asRem, asEm, getSpacing };
