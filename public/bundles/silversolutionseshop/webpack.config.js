var Encore = require('@symfony/webpack-encore');
const { VueLoaderPlugin } = require('vue-loader');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('./build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()                     // empties the outputPath dir before each build
    .enableSourceMaps(!Encore.isProduction())       // enables source maps for Dev
    // .enableVersioning(Encore.isProduction())     // uncomment to create hashed filenames (e.g. app.abc123.css)

    // define the assets of the project
    .addEntry('js/app', './js/assets/js/app.js')
//    .addStyleEntry('css/style', './assets/css/custom.less')
//    .enableLessLoader()
    .addLoader({
        test: /\.vue$/,
        loader: 'vue-loader'
    })
    .addPlugin(new VueLoaderPlugin())

    // $/jQuery as a global variable
    .autoProvidejQuery()
    .addAliases({
        vue: 'vue/dist/vue.js'
      })
;

module.exports = Encore.getWebpackConfig();
