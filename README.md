# Static Site Generator Boilerplate 
Static Site Generator Boilerplate is a NodeJS project which lets you use helpful things like LESS (for CSS), CommonJS (for JavaScript), and EJS (for HTML) to create a static file website.

To make changes to the site, follow the compilation instructions below and deploy the files in `dist/` to AWS (or do whatever you want to do with them).

## Requirements
Requires:
- NodeJS 6.9.2 or higher
- Grunt 0.4.5 or higher (`npm install -g grunt-cli`)  

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
- Write your JavaScript inside the `js/` directory. Each `.js` file directly inside this directory will be passed through Browserify, so you're allowed to use CommonJS style includes. A browserified and uglified version of each of these files is then put inside `dist/js`.
- Write your CSS as LESS inside the `styles/` directory
- Write your HTML pages as EJS inside the `pages/` directory. Each .ejs file directly inside the `pages/` directory will be turned
into a HTML file, so write your partials inside the `pages/partials/` directory instead.
- If you need variables or functions for your EJS, include them inside `Config.TemplateData` object in `config.js`. Note that changes to this file will require you to restart `grunt` if it is already running.
- After compiling the resources (see above), everything is compiled to the `dist/` directory
- Extra static files should be put in `static/`, and will be simply copied into `dist/static/`

## The stack
- Javascript, LESS (CSS) and EJS (HTML) contained in `js/`, `styles/` and `pages/` respectively  
- Everything is compiled to the `dist/` directory  
- Grunt is used to compile everything  
- Static files should be put in `static/`, and will be simply copied into `dist/static/`  

## Deployment to AWS
- If you don't have it, `pip install awscli`
- Deploy via
```
$ aws s3 sync dist/ s3://www.example.com/ --delete
```
