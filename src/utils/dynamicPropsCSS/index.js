const dynamicPropsCSS = (css, defaultValue, props) => {
  let styleKey = String(css).split("-");
  styleKey = styleKey.map((key, index) => {
    return index === 0
      ? String(key)
      : String(key)[0].toUpperCase() + String(key).slice(1);
  });
  styleKey = styleKey.join("");

  return props?.[styleKey] || defaultValue
    ? `${css}: ${props[styleKey] || defaultValue};`
    : "";
};

export default dynamicPropsCSS;
