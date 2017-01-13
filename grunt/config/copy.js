module.exports = {
    main: {
        expand: true,
        src: ['static/**', 'styles/**/*.css'],
        dest: 'dist/'
    },
    plainHTML: {
        expand: true,
        cwd: 'pages/',
        src: ['**/*.html'],
        dest: 'dist/'
    }
};

