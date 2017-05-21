const gulp = require("gulp")
const sass = require("gulp-sass")
const prefix = require("gulp-autoprefixer")
const rename = require("gulp-rename")
const svgstore = require("gulp-svgstore")
const svgmin = require("gulp-svgmin")

gulp.task("default", ["sass", "sass:watch", "icons", "icons:watch"])
gulp.task("build", ["sass", "icons"])

gulp.task("sass", function () {
    return gulp.src("./resources/sass/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(prefix()) 
        .pipe(gulp.dest("./public/css")) 
})

gulp.task("sass:watch", () => {
    return gulp.watch("./resources/sass/**/*", ["sass"])
})

gulp.task("icons:watch", () => {
    return gulp.watch("./resources/icons/**/*", ["icons"])
})

gulp.task("icons", () => {
    return gulp.src("resources/icons/*.svg")
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(rename("iconset.svg")) 
        .pipe(gulp.dest("public/gfx")) 
})
