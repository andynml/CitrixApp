var gulp = require('gulp');

var browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
    return gulp.src('src/less/**/*.less')
              .pipe(sourcemaps.init())
              .pipe(less())
              .pipe(cleanCSS())
              .pipe(concat('style.min.css'))
              .pipe(gulp.dest('dist/css'));
});

gulp.task('css', function () {
    gulp.src('src/css/**/*.css')
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function(){
    browserify('./src/app/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist/bundle/'));
});

gulp.task('default', ['less', 'js']);