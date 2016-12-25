const gulp = require("gulp")
const sass = require("gulp-sass")
const prefix = require("gulp-autoprefixer")
const rename = require("gulp-rename")
const svgstore = require("gulp-svgstore")
const svgmin = require("gulp-svgmin")
const rev = require("gulp-rev")

gulp.task("default", ["sass", "sass:watch", "icons", "icons:watch"])
gulp.task("build", ["sass", "icons"])

gulp.task("sass", function () {
    return gulp.src("./resources/sass/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(prefix())
        .pipe(rev())
        .pipe(gulp.dest("./public/css"))
        .pipe(rev.manifest("css-manifest.json", {  merge: true }))
        .pipe(gulp.dest("./public"))
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
        .pipe(rev())
        .pipe(gulp.dest("public/gfx"))
        .pipe(rev.manifest("gfx-manifest.json", { merge: true }))
        .pipe(gulp.dest("./public"))
})
