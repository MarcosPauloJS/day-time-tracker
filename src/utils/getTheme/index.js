import { CustomTheme } from "../../styledConfig";
const { colors, sizes, fonts } = CustomTheme;

const styles = {
  colors,
  sizes,
  fonts,
};

const getTheme = (keys) => {
  if (!keys || typeof keys !== "string") return "";
  let value = styles;
  keys = keys.split(".");

  keys.forEach((key) => {
    value = value?.[key];
    keys.unshift();
  });

  return typeof value === "object" ? "" : value || "";
};

export default getTheme;
