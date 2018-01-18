var gulp = require('gulp'),
    yargs = require('yargs'),
    gulpif = require('gulp-if'),
    rimraf = require('gulp-rimraf'),
    connect = require('gulp-connect')
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin');
    
var src = "./src/";
var distSrc = "./dist/";
// Check for --production flag
var PRODUCTION = !!(yargs.argv.production);

// For external resources ( bootstrap o foundation )
var sassPaths = [];

var cmps = [ 'common', 'component' ];
function getSrcsOfComponenet( componenetName ){
    return [
        'src/js/app/'+ componenetName +'/*.js',
        'src/js/app/'+ componenetName +'/directive/*.js',
        'src/js/app/'+ componenetName +'/models/*.js',
        'src/js/app/'+ componenetName +'/services/*.js',
        'src/js/app/'+ componenetName +'/filter/*.js',
        'src/js/app/'+ componenetName +'/controllers/modals/*.js',
        'src/js/app/'+ componenetName +'/controllers/*.js'
    ];
}

// Task that compile the scss to css 
gulp.task('sass', function(){
    gulp.src( [ src + '/scss/*.scss'])
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe( gulpif(PRODUCTION,
            sass({
                includePaths: sassPaths,
                outputStyle: 'compressed' // if css compressed **file size**
            }).on('error', sass.logError),
            sass({
                includePaths: sassPaths,
            // outputStyle: 'compressed' // if css compressed **file size**
            }).on('error', sass.logError)
        ))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))        
        .pipe(gulp.dest(distSrc + '/css'));
});

// Task that concat ( or compress if we are in production ) javascript
gulp.task('js', function () {

    // cancello i file mapp
    gulp.src(distSrc + '/**/*.map', { read: false }) // much faster 
        .pipe(rimraf());

    for (var key in cmps) {
        gulp.src( getSrcsOfComponenet( cmps[key] ) )
           // .pipe( gulpif(!PRODUCTION, sourcemaps.init() ))
            .pipe(concat(cmps[key] + '.app.js'))
           // .pipe(gulpif(!PRODUCTION, sourcemaps.write()))     
            .pipe(gulpif(PRODUCTION, uglify()))     
            .pipe(gulp.dest(distSrc + '/js/app/' + cmps[key] + '/'));
    }

});

gulp.task('lint', function() {
    for (var key in cmps) {
        gulp.src( getSrcsOfComponenet( cmps[key] ) )
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
    }
});

// Task that concat ( or compress if we are in production ) vendors
gulp.task('vendors', function () {

    gulp.src( [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
        
            'bower_components/angular-i18n/angular-locale_it.js',
            'bower_components/angular-messages/angular-messages.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/moment/min/moment.min.js',
            'bower_components/angular-confirm/dist/angular-confirm.min.js',
            'bower_components/angular-toastr/dist/angular-toastr.tpls.min.js',
            'src/js/vendors/ng-table.min.js'
        ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(distSrc + '/js/'));
});

// Task that move ( or compress if we are in production ) html 
gulp.task('html', function () {
    gulp.src(src + '**/*.html')
        .pipe( gulpif(PRODUCTION, 
            htmlmin({
                //collapseWhitespace: true,
                removeComments: true,
                collapseInlineTagWhitespace: true
            })
        ))
        .pipe(gulp.dest(distSrc));
});

// Task that move ( or compress if we are in production ) img e co. 
gulp.task('img', function () {
    gulp.src( src + 'assets/**/*.*' )
        .pipe( gulpif(PRODUCTION, 
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
            })
        ))
        .pipe(gulp.dest(distSrc + '/assets'));
});

// Task that create a temporary webserver
gulp.task('webserver', function() {
    connect.server({
        root: 'dist',
        port: 8000,
        livereload: true
    });
});

// Task that reload a temporary webserver
gulp.task('reload', function () {
    gulp.src('./dist/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.html', ['html', 'reload']);
    gulp.watch('./src/js/**/*.*', ['js', 'lint', 'reload']);
    gulp.watch('./src/scss/**/*.*', ['sass', 'reload']);
    gulp.watch('./src/assets/**/*.*', ['img', 'reload']);
});

gulp.task('build', ['html', 'js', 'lint', 'vendors', 'sass', 'img']);
gulp.task('default', ['build', 'webserver', 'watch']);
