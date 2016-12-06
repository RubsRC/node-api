'use strict';

const browserSync = require('browser-sync').create(),
  gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  reload = browserSync.reload;

gulp.task('serve',
  [ 'browser-sync' ],
  function () {
    gulp.watch('views/**/*.pug').on('change', reload);
    gulp.watch('**/*.*').on('change', reload);
    // gulp.watch('**/*.tpl.html').on('change', reload);
  }
);

gulp.task('browser-sync',
  [ 'nodemon' ],
  function() {
    browserSync.init(null, {
      proxy: 'http://localhost:3001',
      browser: 'google-chrome',
      port: 10080
    });
  }
);

gulp.task('nodemon',
  [],
  function (done) {
    var running = false;

    return nodemon({
      script: 'server.js',
      watch: ['*.*']
    })
    .on('start', function () {
      if (!running) {
        done();
      }
      running = true;
    })
    .on('restart', function () {
      setTimeout(function () {
        reload();
      }, 500);
    });
  }
);