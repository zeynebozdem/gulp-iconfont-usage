var gulp = require('gulp');
var sass = require('gulp-sass');
var iconfont = require('gulp-iconfont');
var iconfontCSS = require('gulp-iconfont-css');
var autoprefixer = require('gulp-autoprefixer');

var fontName = 'demo-icons';
 
  gulp.task('iconfont', function(done) {
    gulp.src(['./images/svg/*.svg'])
      .pipe(iconfontCSS({
        fontName: fontName,
        targetPath: '/app/scss/global/_icons.scss',
        fontPath: '/app/fonts/'
      }))
      .pipe(iconfont({
        fontName: fontName,
        // Remove woff2 if you get an ext error on compile
        formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
        normalize: true,
        fontHeight: 1001
      }))
      .pipe(gulp.dest('/app/fonts/'));
      done();
  });
  gulp.task('scss', function(){
    gulp.src('/app/scss/**/*.scss')
      .pipe(gsass())
      .pipe(autoprefixer()) // Requires the gulp-autoprefixer plugin
      .pipe(gulp.dest('/app/css/'))
      .pipe(notify({ message: 'SCSS task complete' })) // Requires gulp-notify
  });
 
  gulp.task('icons', gulp.series('iconfont', 'scss'));