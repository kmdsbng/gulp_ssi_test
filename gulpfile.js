const gulp = require("gulp");
const ssi = require("gulp-ssi");

gulp.task("default", function() {
  return (
    gulp.src("./src/**/*.html")
        .pipe(ssi())
        .pipe(gulp.dest("./dist"))
  );
});


