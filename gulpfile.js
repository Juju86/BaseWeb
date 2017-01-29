// BaseWeb's Gulpfile
// Gulp.js configuration
var
  // Require Modules
  // Global
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  merge = require('merge-stream'),
  minimist = require('minimist'),
  // CSS
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  // JS
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  // Img
  imagemin = require('gulp-imagemin'),

  // folders
  folder = {
    src: 'src/',
    dest: 'dist/',
    srcDocs: 'docs/src/',
    destDocs: 'docs/assets/'
  },

  // File sets to use for search and replace
  searchFiles = {
    version: [
      'README.md',
      'package.json',
      'src/scss/baseweb.scss',
      'docs/src/scss/docs.scss',
      'docs/_data/project.yml'
    ],
    year: [
      'README.md',
      'LICENSE',
      'src/scss/baseweb.scss',
      'docs/src/scss/docs.scss',
    ]
  },

  // Allows us to pass parameters to gulp tasks
  options = minimist(process.argv.slice(2))
;

// ---

// Utility Tasks
// Search and replace
gulp.task('replace', function() {

  var src;

  if ((options.s == undefined) || (options.r == undefined) || (options.f == undefined)) {
    console.error('USAGE: gulp replace -s <SEARCH> -r <REPLACE> -f <FILES>');
  } else {
    if (searchFiles[options.f] == undefined) {
      src = options.f;
    } else {
      src = searchFiles[options.f];
    }

    return gulp.src(src, { base: './' })
      .pipe(replace(String(options.s), String(options.r)))
      .pipe(gulp.dest('./'));
  }

});

// ---

// BaseWeb Source Builds
// CSS processing
// Output expanded and minified CSS files from source
gulp.task('css', function() {
  var
    src = folder.src + 'scss/baseweb.scss',
    dest = folder.dest + 'css/',
    sassOpts = {
      outputStyle: 'expanded',
      precision: 3
    },
    postcssOpts = [
      autoprefixer({ browsers: ['last 2 versions', '> 2%'] })
    ],
    css = gulp.src(src)
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(gulp.dest(dest)),
    cssmin = gulp.src(src)
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(postcss([cssnano]))
      .pipe(rename('baseweb.min.css'))
      .pipe(gulp.dest(dest));

  return merge(css, cssmin);
});

// JavaScript processing
// Output expanded and minified JS files from source
gulp.task('js', function() {
  var
    src = folder.src + 'js/**/*',
    dest = folder.dest + 'js/',
    js = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.js'))
      .pipe(gulp.dest(dest)),
    jsmin = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('baseweb.min.js'))
      .pipe(stripdebug())
      .pipe(uglify())
      .pipe(gulp.dest(dest));

  return merge(js, jsmin);
});

// ---

// Documentation Builds
// Output expanded and minified CSS files from documentation
gulp.task('docs:css', function() {
  var
    src = folder.srcDocs + 'scss/docs.scss',
    dest = folder.destDocs + 'css/',
    sassOpts = {
      outputStyle: 'expanded',
      includePaths: ['docs/src/scss/', 'src/scss/'],
      precision: 3
    },
    postcssOpts = [
      autoprefixer({ browsers: ['last 2 versions', '> 2%'] })
    ],
    css = gulp.src(src)
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(gulp.dest(dest)),
    cssmin = gulp.src(src)
      .pipe(sass(sassOpts)
      .on('error', sass.logError))
      .pipe(postcss(postcssOpts))
      .pipe(postcss([cssnano]))
      .pipe(rename('docs.min.css'))
      .pipe(gulp.dest(dest));

  return merge(css, cssmin);
});

// JS Processing
// Output expanded and minified JS files from documentation
gulp.task('docs:js', function() {
  var
    src = folder.srcDocs + 'js/**/*',
    dest = folder.destDocs + 'js/',
    js = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('docs.js'))
      .pipe(gulp.dest(dest)),
    jsmin = gulp.src(src)
      .pipe(deporder())
      .pipe(concat('docs.min.js'))
      .pipe(stripdebug())
      .pipe(uglify())
      .pipe(gulp.dest(dest));

  return merge(js, jsmin);
});

// Image processing
// Compress all image files from documentation
gulp.task('docs:img', function() {
  var dest = folder.destDocs + 'img/';
  return gulp.src(folder.srcDocs + 'img/**/*')
    .pipe(newer(dest))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(dest));
});

// ---

// Watch & Bulk Tasks
// Builds all source assets
gulp.task('src', ['css', 'js']);
// Builds all documentation assets
gulp.task('docs', ['docs:css', 'docs:js', 'docs:img']);
// Build everything
gulp.task('go', ['src', 'docs']);

// watch for changes
// Watches all asset files and runs the appropriate build task based on changed
gulp.task('watch', function() {

  // src scss changes
  gulp.watch(folder.src + 'scss/**/*', ['css', 'docs:css']);
  // src js changes
  gulp.watch(folder.src + 'js/**/*', ['js']);

  // docs scss changes
  gulp.watch(folder.srcDocs + 'scss/**/*', ['docs:css']);
  // docs js changes
  gulp.watch(folder.srcDocs + 'js/**/*', ['docs:js']);
  // docs img changes
  gulp.watch(folder.srcDocs + 'img/**/*', ['docs:img']);

});

// default task
// Builds everything and then initiates the watch task
gulp.task('default', ['go', 'watch']);
