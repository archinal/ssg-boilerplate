var templateVariables = {
    title: 'My Website'
};

module.exports = {
    all: {
      options: templateVariables,
      cwd: 'pages/',
      src: ['*.ejs'],
      dest: 'dist/',
      expand: true,
      ext: '.html'
    }
};
