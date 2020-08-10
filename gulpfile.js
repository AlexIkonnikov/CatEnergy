const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync").create();
const gulpStylelint = require('gulp-stylelint');
const concat = require('gulp-concat');

function buildjs () {
  return (
    gulp.src(['source/js/*.js' , '!source/js/app.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('source/js'))
  );
}

function style() {
  return (
      gulp.src("source/sass/style.scss")

          .pipe(sass())
          .pipe(plumber())
          .pipe(postcss([
            autoprefixer()
          ]))
          .pipe(gulp.dest("source/css"))
          .pipe(browserSync.stream())
  );
}

function serve() {
  browserSync.init({

      server: {
          baseDir: "source/"
      }

  });
  gulp.watch("source/sass/**/*.scss", style)
  gulp.watch("source/*.html").on("change", browserSync.reload);
}

function LintCss(){
  return gulp
    .src('source/sass/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}

exports.buildjs = buildjs;
exports.serve = serve;
exports.style = style;
exports.LintCss = LintCss;
