const mix = require('laravel-mix');
const glob = require('glob');
mix.pug = require('laravel-mix-pug-to-html');

mix.setResourceRoot('');

mix.js('src/js/app.js', 'public/js/app.js')
    .autoload({
        "popper.js": ['Popper', 'window.Popper', 'popper', 'window.popper'],
        "jquery": ['$', 'window.jQuery']
    })
glob.sync('src/sass/**/*.scss').map(function (file) {
    if (file.match("/_")) return;
    mix.sass(file, 'public/css/')
        .options({
            processCssUrls: false,
            postCss: [
                require('css-mqpacker')(),
                require('css-declaration-sorter')({
                    order: 'smacss'
                })
            ]
        });
    if (!mix.inProduction()) {
        mix.webpackConfig({
            devtool: 'inline-source-map'
        })
            .sourceMaps()
    }
});
glob.sync('src/pug/**/*.pug').map(function (file) {
    if (file.match("/_")) return;
    if (!mix.inProduction()) {
        mix.pug(file, 'public/', {
            pug: {
                pretty: true,
                debug: true
            }
        });
    } else {
        mix.pug(file, 'public/')
    }
});
mix.browserSync({
    files: './**/*',
    server: './public/',
    proxy: false
});