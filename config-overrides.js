const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
    addWebpackAlias({
        component: path.resolve(__dirname, "./src/components"),
        page: path.resolve(__dirname, "./src/pages"),
    })
);
