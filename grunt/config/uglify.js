module.exports = {
    production: {
        options: {
            overwrite: true
        },
        files: [{
            expand: true,
            cwd: 'dist/js/',
            src: '*.js',
            dest: 'dist/js/'
        }]
    }
};
