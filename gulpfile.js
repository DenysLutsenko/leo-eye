var gulp = require("gulp");
var less = require("gulp-less");
var rename = require("gulp-rename");
var minifyCSS = require("gulp-minify-css");
var prefix = require('gulp-autoprefixer');
var path = require("path");

var cssDir = path.join(__dirname, 'assets', "css");
var sourceLessPath = path.join(__dirname, "less/style.less");

gulp.task('default', function () {
    gulp.src(sourceLessPath)
        .pipe(less())
        .pipe(prefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(cssDir));
});