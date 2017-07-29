"use strict";

import gulp from 'gulp';
import babel from 'gulp-babel';
import clean from 'gulp-clean';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import usemin from 'gulp-usemin';
import del from 'del';

gulp.task('default', ['copy'], () => gulp.start('del'));

gulp.task('del', ['usemin'], () => {
    del(['dist']);
});

gulp.task('copy', ['clean'], () => {
    return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));     
});

gulp.task('clean', () => {
    return gulp.src(['./dist', 'index.html'])
		.pipe(clean({force: true}));
});

gulp.task('usemin', function() {
  return gulp.src('dist/*.html')
    .pipe(usemin({
        html: [ htmlmin({ collapseWhitespace: true }) ],
      
        inlinejs: [ babel({
                presets: [
                    ['es2015', {modules: false}]
                ]}), 
            uglify() ]
    }))
    .pipe(gulp.dest(''));
});