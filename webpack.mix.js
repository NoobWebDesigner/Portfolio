const mix = require('laravel-mix');
const glob = require('glob');
mix.pug = require('laravel-mix-pug-recursive');

mix.setResourceRoot('');

mix.js('src/js/app.js', 'public/js/app.js')
  .sourceMaps(false);

glob.sync('src/sass/**/*.sass').map(function (file) {
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
glob.sync('src/**/*.pug').map(function (file) {
  if (file.match("/_")) return;
  mix.pug(file, 'public', {
    excludePath: 'src/pug'
  })
});

mix.browserSync({
  files: './**/*',
  server: './public/',
  proxy: false
});