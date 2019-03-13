const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-webserver');
const minCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/'))
});

gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});

gulp.task('minCss', function() {
    return gulp.src('./src/css/*.css')
        .pipe(minCss())
        .pipe(gulp.dest('./src/css/'))
});

gulp.task('uglify', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'))
});

gulp.task('server', function() {
    return gulp.src('./src/')
        .pipe(server({
            port: 8787,
            open: true,
            livereload: true
        }))
});
gulp.task('dev', gulp.series('sass', 'minCss', 'uglify', 'server', 'watch'));