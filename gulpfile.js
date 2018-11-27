let gulp = require('gulp');
let sass = require('gulp-sass');
let watch =require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src('public/stylesheets/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('watch', function(){
    gulp.watch('public/stylesheets/**/*.scss', ['sass']);
});