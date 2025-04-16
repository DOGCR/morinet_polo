// node.js Packages / Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // dart-sass に対応
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const gulpif = require('gulp-if');
const npmDist = require('gulp-npm-dist');

const compile = {
  jsMinify: true,
  cssMinify: true,
  jsSourcemaps: false,
  cssSourcemaps: true,
};

const directory = {
  resources: './src',
  dist: '../',
  livePath: '../Template',
  distPath: '../Template',
  node_modules: 'node_modules',
};

const file = {
  scss: 'style.scss',
  functions: 'functions.js',
  plugins: 'plugins.scss',
};

const paths = {
  dist: {
    base: directory.dist,
    html: directory.dist,
    css: directory.distPath + '/css',
    scss: directory.dist + '/scss',
    js: directory.dist + '/js',
    plugins: directory.dist + '/plugins',
    images: directory.dist + '/images',
    webfonts: directory.dist + '/webfonts',
  },
  src: {
    base: directory.resources,
    html: directory.resources + '/**/*.html',
    css: directory.resources + '/css',
    scss: directory.resources + '/scss',
    js: directory.resources + '/js',
    images: directory.resources + '/images/**/*.+(png|jpg|gif|svg)',
    plugins: directory.resources + '/scss',
    webfonts: directory.resources + '/webfonts/*',
  },
};

// SCSS
gulp.task('scss', () => {
  return gulp.src(paths.src.scss + '/' + file.scss)
    .pipe(gulpif(compile.cssSourcemaps, sourcemaps.init()))
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif(compile.cssSourcemaps, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream());
});

gulp.task('plugins', () => {
  return gulp.src(paths.src.scss + '/' + file.plugins)
    .pipe(gulpif(compile.cssSourcemaps, sourcemaps.init()))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif(compile.cssSourcemaps, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream());
});

gulp.task('compile:css', gulp.series('scss', 'plugins'));

gulp.task('minify:css', () => {
  return gulp.src(paths.dist.css + '/**/!(*.min)*.css')
    .pipe(gulpif(compile.cssMinify, cleanCSS({ compatibility: 'ie11' })))
    .pipe(gulpif(compile.cssMinify, rename({ suffix: '.min' })))
    .pipe(gulp.dest(paths.dist.css));
});

gulp.task('js', () => {
  return gulp.src(paths.src.js + '/**/*.js')
    .pipe(gulpif(compile.jsSourcemaps, sourcemaps.init()))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(gulpif(compile.jsSourcemaps, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.stream());
});

gulp.task('minify:js', () => {
  return gulp.src(paths.dist.js + '/**/!(*.min)*.js')
    .pipe(gulpif(compile.jsMinify, uglify()))
    .pipe(gulpif(compile.jsMinify, rename({ suffix: '.min' })))
    .pipe(gulp.dest(paths.dist.js));
});

gulp.task('copy:libs', () => {
  return gulp.src(npmDist(), { base: './node_modules' })
    .pipe(rename(path => {
      path.dirname = path.dirname.replace(/\/dist|\/build|\/min|\/media|\/scripts/, '');
    }))
    .pipe(gulp.dest(paths.dist.plugins));
});

gulp.task('copy:html', () => {
  return gulp.src(paths.src.html).pipe(gulp.dest(paths.dist.html));
});

gulp.task('copy:images', () => {
  return gulp.src(paths.src.images).pipe(gulp.dest(paths.dist.images));
});

gulp.task('copy:webfonts', () => {
  return gulp.src(paths.src.webfonts).pipe(gulp.dest(paths.dist.webfonts));
});

gulp.task('clean', () => {
  return gulp.src(paths.dist.base, { read: false, allowEmpty: true }).pipe(clean({ force: true }));
});

gulp.task('build', gulp.series('scss', 'js'));

gulp.task('watch', () => {
  browserSync.init({ server: { baseDir: directory.livePath } });
  gulp.watch(paths.src.scss + '/**/*.scss', gulp.series('scss', 'plugins'));
  gulp.watch(directory.livePath + '/**/*.html').on('change', browserSync.reload);
  gulp.watch(paths.src.js + '/**/*.js', gulp.series('js'));
  gulp.watch(paths.src.images, gulp.series('copy:images')).on('change', browserSync.reload);
  gulp.watch(paths.src.webfonts, gulp.series('copy:webfonts')).on('change', browserSync.reload);
});
