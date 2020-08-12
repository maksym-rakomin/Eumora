'use strict';

const gulp       	 = require('gulp'),
        browserSync	 = require('browser-sync').create(),
        sass       	 = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        rigger       = require('gulp-rigger'),
        cleanCSS     = require('gulp-clean-css'),
        rename       = require('gulp-rename'),
        imagemin     = require('gulp-imagemin'),
        clean        = require('gulp-clean'),
        pngquant     = require('imagemin-pngquant'),
        zopfli       = require('imagemin-zopfli'),
        mozjpeg      = require('imagemin-mozjpeg'),
        giflossy     = require('imagemin-giflossy'),
        jpegtran     = require('imagemin-jpegtran'),
        uglify       = require('gulp-uglify-es').default,
        sourcemaps   = require('gulp-sourcemaps'),
        cache        = require('gulp-cache');
//очищаем папку css
gulp.task('clean-css', function() {
    return gulp.src('dist/css', {allowEmpty: true})
               .pipe(clean());
});
//собираем файлы стилей для dist
gulp.task('sass-build', gulp.series('clean-css', function() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(cleanCSS({
                debug: true,
                level: {1: {specialComments: 0}}
            }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(rename({
            suffix : '.min'
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
}));

//собираем файлы стилей при работе
gulp.task('sass-serve', function() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(rename({
            suffix : '.min'
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});
// очищаем html
gulp.task('clean-html', function() {
    return gulp.src('dist/*.html', {allowEmpty: true})
               .pipe(clean());
});
// собираем html
gulp.task('html-build', gulp.series('clean-html', function() {
    return gulp.src([
        'src/**/*.html',
        '!src/partials/_*.html'])
        .pipe(rigger())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
}));
// task html для разработки
gulp.task('html-serve', function() {
    return gulp.src([
        'src/**/*.html',
        '!src/partials/_*.html'])
        .pipe(rigger())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// очищаем папку с изображениями
gulp.task('clean-img', function() {
    return gulp.src('dist/img', {allowEmpty: true})
               .pipe(clean());
});
// переносим и минифицируем изображения
gulp.task('img', gulp.series('clean-img', function() {
    return gulp.src('src/favicon.*')
            .pipe(gulp.dest('dist')) &&
        gulp.src('src/img/**/*.*')
        .pipe(imagemin([
            pngquant({
                speed: 1,
                quality: [0.95, 1]
            }),
            zopfli({more: true}),
            giflossy({
                optimizationLevel: 3,
                optimize: 3,
                lossy: 2
            }),
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            jpegtran({
                progressive: true
            }),
            mozjpeg({
                quality: 90
            })
        ]))
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
}));
// таск для разработки
gulp.task('img-serve', function() {
    return gulp.src('src/favicon.*')
            .pipe(gulp.dest('dist')) &&
        gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
});
// очищаем папку со шрифтами
gulp.task('clean-fonts', function() {
    return gulp.src('dist/fonts', {allowEmpty: true})
               .pipe(clean());
});
// переносим их в папку dist
gulp.task('fonts', gulp.series('clean-fonts', function() {
    return gulp.src('src/fonts/**/*.*')
               .pipe(gulp.dest('dist/fonts'))
               .pipe(browserSync.stream())
}));
// таск для разработки
gulp.task('fonts-serve', function() {
    return gulp.src('src/fonts/**/*.*')
               .pipe(gulp.dest('dist/fonts'))
               .pipe(browserSync.stream())
});
// очищаем js
gulp.task('clean-js', function() {
    return gulp.src('dist/js', {allowEmpty: true})
               .pipe(clean());
});
// переносим js
gulp.task('js', gulp.series('clean-js', function() {
    return gulp.src('src/js/main.js')
               .pipe(sourcemaps.init())
               .pipe(rigger())
               .pipe(gulp.dest("dist/js"))
               .pipe(uglify())
               .pipe(rename({
                   suffix: '.min'
               }))
               .pipe(sourcemaps.write())
               .pipe(gulp.dest("dist/js"))
               .pipe(browserSync.stream())
}));
// переносим js
gulp.task('js-serve', function() {
    return gulp.src('src/js/main.js')
               .pipe(rigger())
               .pipe(gulp.dest("dist/js"))
               .pipe(rename({
                   suffix: '.min'
               }))
               .pipe(gulp.dest("dist/js"))
               .pipe(browserSync.stream())
});
// очищаем папку dist
gulp.task('clean', function() {
    return gulp.src('dist',{allowEmpty: true })
        .pipe(clean());
});
// очищаем кэш
gulp.task('clear', () =>
    cache.clearAll()
);

// Static Server + watching files
gulp.task('serve', gulp.series('html-serve', 'sass-serve', 'img-serve', 'fonts-serve', 'js-serve', function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/scss/**/*.scss", gulp.parallel('sass-serve'));
    gulp.watch("src/scss/**/*.css", gulp.parallel('sass-serve'));
    gulp.watch("src/**/*.html", gulp.parallel('html-serve'));
    gulp.watch("src/img/**/*.*", gulp.parallel('img-serve'));
    gulp.watch("src/fonts/**/*.*", gulp.parallel('fonts'));
    gulp.watch("src/js/**/*.*", gulp.parallel('js-serve'));
}));


gulp.task('build', gulp.series('html-build', 'sass-build', 'img', 'fonts', 'js'));
gulp.task('default', gulp.series('serve'));