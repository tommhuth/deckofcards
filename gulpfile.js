const gulp = require("gulp")
const sass = require("gulp-sass")
const prefix = require("gulp-autoprefixer")

gulp.task("default", ["sass", "sass:watch"])
gulp.task("build", ["sass"])

gulp.task("sass", function () {
    gulp.src("./resources/sass/app.scss")
        .pipe(sass().on("error", sass.logError))
		.pipe(prefix())
		.pipe(gulp.dest("./public/css"))
})

gulp.task("sass:watch", () => {
    gulp.watch("./resources/sass/**/*", ["sass"])
})
