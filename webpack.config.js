const path = require(`path`);

module.exports = {
    mode: `development`,
    entry: `./src/js/main.js`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `dist`)
    },
    devtool: `source-map`,
    devServer: {
        contentBase: path.join(__dirname, `dist`),
        compress: true,
        watchContentBase: true
    }
}