var gulp = require('gulp');
var partial = require('gulp-html-partial');
var concat = require('gulp-concat');

var HTML_PATH = 'public/html/**/*.html'
var CSS_PATH = 'public/css/**/*.css'
var DIST_PATH = 'public/dist/'

//partial
gulp.task('html', function () {
    console.log('starting scripts task');

    return gulp.src([HTML_PATH])
        .pipe(partial({
            basePath: 'public/html/partial/'
        }))
        .pipe(gulp.dest('public/'))
});

//styles
gulp.task('css', function () {
	console.log('starting scripts task');

	return gulp.src(CSS_PATH)
		.pipe(concat('styles.css'))
        .pipe(gulp.dest(DIST_PATH))      
});

