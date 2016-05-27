// CONFIGURATION
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

// Variables fichiers sources 
var jsSource = [
    './assets/js/core/factories/*.ts',
    './assets/js/controllers/*.ts',
    './assets/js/app.ts'
];

var cssSource = './assets/styles/style.scss';

// Variables fichiers sorties
var jsOut = 'scripts.js';

// TASKS
gulp.task('compileJS', function() {
    return gulp.src(jsSource)
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: false
        }))
        .pipe(concat(jsOut))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('compileCss', function() {
    return gulp.src(cssSource)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'));
});

// Watchers
gulp.task('watchCSS', ['compileCss'], function() {
    gulp.watch(cssSource['compileCSS']);
});

gulp.task('watchJS', ['compileJS'], function() {
    gulp.watch(jsSource, ['compileJS']);
});