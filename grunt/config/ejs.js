var Config = require('../../config');

module.exports = {
    all: {
      options: Config.TemplateData,
      cwd: 'pages/',
      src: ['*.ejs'],
      dest: 'dist/',
      expand: true,
      ext: '.html'
    }
};
