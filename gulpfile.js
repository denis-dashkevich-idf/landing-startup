"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const csso = require('gulp-csso');
const browserSync = require("browser-sync").create();
sass.compiler = require("node-sass");

gulp.task("sass", function () {
  return gulp
    .src("./src/assets/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(gcmq())
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/assets/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "src",
    },
    // notify: false,
    // tunnel: true,
  });
});

gulp.task("checkupdate", function () {
  gulp.watch("./src/assets/scss/**/*.scss", gulp.parallel("sass"));
  gulp.watch("./src/*.html").on('change', browserSync.reload);
});

gulp.task("watch", gulp.parallel("sass", "checkupdate", "browser-sync"));
