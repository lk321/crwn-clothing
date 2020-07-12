const path = require("path")

module.exports = {
    webpack: {
        alias: {
            component: path.resolve(__dirname, "./src/components"),
            page: path.resolve(__dirname, "./src/pages"),
        }
    }
}