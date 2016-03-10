var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function() {
	gulp.watch('css/less/*.less', ['less']);
});

gulp.task('less', function() {
   gulp.src('css/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('./css/'));
});
