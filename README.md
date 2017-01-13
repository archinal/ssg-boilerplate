# Static Site Generator Boilerplate 
Static Site Generator Boilerplate is a NodeJS project which compiles a simple static files site.

To make changes to the site, follow the compilation instructions below and deploy the files in `dist/` to AWS (or do whatever you want to do with them).

## Developing
Requires:
- Node 6.9.2  
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

## The stack
- Javascript, LESS (CSS) and EJS (HTML) contained in `js/`, `styles/` and `pages/` respectively  
- Everything is compiled to the `dist/` folder  
- Grunt is used to compile everything  
- Static files should be put in `static/`, and will be simply copied into `dist/static/`  

## Deployment
- If you don't have it, `pip install awscli`
- Deploy via
```
$ aws s3 sync dist/ s3://www.example.com/ --delete
```
