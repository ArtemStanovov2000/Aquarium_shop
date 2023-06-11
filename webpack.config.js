const path = require(`path`);

module.exports = {
    mode: `development`,
    entry: `./src/main.js`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `dist`)
    },
    devtool: `source-map`,
    devServer: {
        contentBase: path.join(__dirname, `dist`),
        publicPath: "http://localhost:8080/webpack-dev-server",
        compress: true,
        watchContentBase: true
    }
}