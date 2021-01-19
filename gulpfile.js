const {src,dest,watch} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

//优化html
function fnhtml(){
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist/pages'));
}
// 优化主页
function fncopy(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
}
// 优化图片
function fnimg(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
}
//优化css
function fncss(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle : 'expanded'}))
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('dist/css'))
}
// 优化js
function fnJs() {
    return gulp.src('./src/js/*.js')
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'))
}
// 监听
function fnwatch(){
    watch('./src/pages/*.html',fnhtml);
    watch('./src/sass/*.scss',fncss);
    watch('./src/img/*',fnimg);
    watch('./src/js/*.js',fnJs);
    watch('./src/index.html',fncopy);
}

// 导出模块
exports.html = fnhtml;
exports.copy = fncopy;
exports.img = fnimg;
exports.css = fncss;
exports.js = fnJs;
exports.default = fnwatch;