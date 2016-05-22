var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

// sass options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compact'
};

//error notification settings for plumber
var plumberErrorHandler = { errorHandler: notify.onError({
	title: 'Gulp',
	message: 'Error: <%= error.message %>'
  })
};

// gulp sass tasl
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
	.pipe(plumber(plumberErrorHandler))
	.pipe(sass(sassOptions))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./css/'))
});

// gulp watch task
gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);





