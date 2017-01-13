# Static Site Generator Boilerplate 
Static Site Generator Boilerplate is a NodeJS project which compiles a simple static files site.

To make changes to the site, follow the compilation instructions below and deploy the files in `dist/` to AWS (or do whatever you want to do with them).

## Developing
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
- Write your JavaScript inside the `js/` directory.
- Write your CSS as LESS inside the `styles/` directory
- Write your HTML pages as EJS inside the `pages/` directory. Each .ejs file directly inside the `pages/` directory will be turned
into a HTML file, so write your partials inside the `pages/partials/` directory instead.
- If you need variables or functions for your EJS, include them inside the `templateVariables` object in `grunt/config/ejs.js`
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
