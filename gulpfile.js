const del = require('delete');
const { watch, series, src, dest } = require('gulp');
const sass = require('gulp-sass');

function styles() {
    return src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css/'));
};


function clean() {
    return del([
        'css/main.css'
    ]);
};

function defaultTask() {
    watch('sass/**/main.scss', series(clean, styles));
}


exports.default = defaultTask



