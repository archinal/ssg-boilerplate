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
        files: ['static/**/*'],
        tasks: ['copy'],
        livereload: true
    },
    ejs: {
        files: ['pages/**/*'],
        tasks: ['ejs'],
        livereload: true
    }
};
