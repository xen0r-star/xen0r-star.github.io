const path = require('path')

module.exports = {
    src: path.resolve(__dirname, '../src'),
    public: path.resolve(__dirname, '../public'),
    build: path.resolve(__dirname, '../build'),
    static: path.resolve(__dirname, '../static'),
    template: path.resolve(__dirname, '../src/template'),
    templatePhone: path.resolve(__dirname, '../src/template/phone'),
    templateDesktop: path.resolve(__dirname, '../src/template/desktop'),
    picture: path.resolve(__dirname, '../src/picture'),
}