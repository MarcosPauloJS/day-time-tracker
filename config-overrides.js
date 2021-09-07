const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@elements": "src/components/elements",
    "@modules": "src/components/modules",
    "@utils": "src/utils",
    "@pages": "src/components/pages",
    "@src": "src/",
  })(config);

  return config;
};
