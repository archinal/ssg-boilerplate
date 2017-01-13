module.exports = {
    development: {
        options: {
            paths: ['styles'],
            compress: true
        },
        files: {
            "dist/styles/main.css": "styles/**/*.less"
        }
    }

};
