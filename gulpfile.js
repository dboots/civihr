var gulp = require('gulp');
var less = require('gulp-less');

//-- watch all less files
gulp.task('default', function() {
	gulp.watch('css/less/*.less', ['less']);
});

//-- only process the main LESS file
gulp.task('less', function() {
   gulp.src('css/less/style.less')
      .pipe(less())
      .pipe(gulp.dest('./css/'));
});
