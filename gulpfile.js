var gulp = require('gulp');
var less = require('gulp-less');
var clean = require('gulp-clean');
var prettify = require('gulp-prettify');
var runSequence = require('run-sequence');

gulp.task('less',function() {
	gulp.src('app/less/*.less').pipe(less()).pipe(gulp.dest('tmp/css/'));
});

gulp.task('clean',function() {
	gulp.src('tmp').pipe(clean());
});

gulp.task('copy',function() {
	gulp.src('app/*.html').pipe(prettify()).pipe(gulp.dest('tmp'));
});

gulp.task('default', ['copy','less']);