module.exports = {
    development: {
        options: {
            paths: ['styles'],
            compress: true
        },
        files: {
            "dist/css/main.css": "styles/**/*.less"
        }
    }

};
