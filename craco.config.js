const path = require("path")

module.exports = {
    webpack: {
        alias: {
            asset: path.resolve(__dirname, "./src/assets"),
            component: path.resolve(__dirname, "./src/components"),
            page: path.resolve(__dirname, "./src/pages"),
            data: path.resolve(__dirname, "./src/data"),
            util: path.resolve(__dirname, "./src/utils"),
            rdx: path.resolve(__dirname, "./src/redux"),
        }
    }
}