let gulp = require('gulp');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let cleanCSS = require('gulp-clean-css');


gulp.task('sass', function(){
    return gulp.src('public/stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets/'))
});


gulp.task('minify-css', () => {
    return gulp.src('public/stylesheets/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('watch', function(){
    gulp.watch('public/stylesheets/**/*.scss', ['sass']);
    gulp.watch('public/stylesheets/*.css', ['minify-css']);
});