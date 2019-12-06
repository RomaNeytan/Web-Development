const gulp = require('gulp');
const sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
let cleanCSS = require('gulp-clean-css');



function style(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

gulp.task('auto', function () {
    return gulp.src('css/style.css')
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],{ cascade: true }))
    .pipe(gulp.dest('css/'));
})

gulp.task('minify', () => {
    return gulp.src('css/*.css')
      .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      }))
    .pipe(gulp.dest('css/'));
  });

exports.style = style;
exports.watch = watch;