module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        configPath: process.cwd() + '/grunt/config',
        data: {}
    });

    // ### Day to day running tasks ###
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('bundle', ['ejs', 'less', 'uglify', 'copy']);
};
