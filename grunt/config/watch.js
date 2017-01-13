module.exports = {
    options: {
        atBegin: true,
        spawn: false
    },
    css: {
        files: ['styles/**/*.less'],
        tasks: ['less'],
        livereload: true
    },
    js: {
        files: ['js/**/*.js'],
        tasks: ['browserify', 'uglify'],
        livereload: true
    },
    staticFiles: {
        files: ['static/**/*', 'styles/**/*.css'],
        tasks: ['copy'],
        livereload: true
    },
    plainHTML: {
        files: ['pages/**/*.html'],
        tasks: ['copy:plainHTML'],
        livereload: true
    },
    ejs: {
        files: ['pages/**/*.ejs'],
        tasks: ['ejs'],
        livereload: true
    }
};
