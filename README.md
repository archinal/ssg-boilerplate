# Static Site Generator Boilerplate 
Static Site Generator Boilerplate is a NodeJS project which lets you use helpful things like [LESS](http://lesscss.org/) (for CSS), CommonJS (for JavaScript) via [Browserify](http://browserify.org/), and [EJS](http://www.embeddedjs.com/) (for HTML) to create a static file website.

To make changes to the site, follow the compilation instructions below and deploy the files in `dist/` to AWS (or do whatever you want to do with them).

## Requirements
Requires:
- [Node.js](https://nodejs.org/en/) 6.9.5 or higher
- [Grunt](http://gruntjs.com/) CLI 1.2.0 or higher (`npm install -g grunt-cli`)

To set up:
```
$ npm install
```

To compile:
```
$ grunt bundle
```

To continuously compile as you make changes:
```
$ grunt
```

## Using the boilerplate
- Clone this repository to wherever you want. This will now be the foundation of your website.
- Write your JavaScript inside the `js/` directory.
Each `.js` file directly inside this directory will be passed through Browserify, so you're allowed to use CommonJS style includes (but you don't have to). A browserified and [uglified](https://github.com/mishoo/UglifyJS) version of each of these files is then put inside `dist/js`.
- Write your styles as CSS or LESS inside the `styles/` directory.
The LESS files will be compiled into CSS, and all the CSS files will be placed in `dist/styles`.
- Write your HTML pages as plain HTML or as EJS inside the `pages/` directory. Each .ejs file directly inside the `pages/` directory will be turned
into a HTML file, so write your partials inside the `pages/partials/` directory instead.
- If you need variables or functions for your EJS, include them inside `Config.TemplateData` object in `config.js`. Note that changes to this file will require you to restart `grunt` if it is already running.
- Extra static files (such as images) should be put in `static/`.
- After compiling the resources (see above), everything is compiled to the `dist/` directory.

## Deployment to AWS
- If you don't have it, `pip install awscli`
- Deploy via
```
$ aws s3 sync dist/ s3://www.example.com/ --delete
```
