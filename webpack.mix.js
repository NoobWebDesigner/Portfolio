const mix = require("laravel-mix");
const glob = require("glob");

require("laravel-mix-purgecss");

mix.setResourceRoot("");

mix.js("src/js/app.js", "public/js/app.js").sourceMaps(false);

glob.sync("src/sass/**/*.sass").map(function(file) {
  if (file.match("/_")) return;
  mix.sass(file, "public/css/").options({
    processCssUrls: false,
    postCss: [
      require("css-mqpacker")(),
      require("css-declaration-sorter")({
        order: "smacss",
      }),
    ],
  });
  if (!mix.inProduction()) {
    mix
      .webpackConfig({
        devtool: "inline-source-map",
      })
      .sourceMaps();
  }
});

mix.purgeCss({
  // production時のみ有効化
  enabled: mix.inProduction(),
  extend: {
    content: [
      path.join(__dirname, "public/**/*.html"),
      path.join(__dirname, "public/**/*.js"),
    ],
    whitelistPatterns: [/hljs/],
  },
});

mix.browserSync({
  files: "./**/*",
  server: "./public/",
  proxy: false,
});
